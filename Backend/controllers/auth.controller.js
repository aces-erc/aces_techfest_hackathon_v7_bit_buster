import bcrypt from 'bcryptjs';
// import uploadToCloudinary from '../lib/cloudinary/uploadToCloudinary.js';
import generateTokenAndSetCookie from '../lib/jwt/generateToken.js';
import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken'


// signup logic
export const signup = async (req, res) => {
    try {
        // Extract required parameters from body sent from frontend
        const {
            firstName,
            lastName,
            email,
            contact,
            citizenShipNumber,
            role,
            bloodGroup,
            age,
            lastDonationDate,
            password,
            confirmPassword,
            gender
        } = req.body;

        // console.log(req);


        // const profileImageFile = req.files?.profileImageFile;
        // const citizenshipImageFile = req.files?.citizenshipImageFile;

        //check if confirm password match with password
        if (password !== confirmPassword)
            return res.status(400).json({
                success: false,
                message: "confirm password doesn't match!"
            });

        //check if the user with given username already exists.
        const user = await userModel.findOne({ email });

        if (user)
            return res.status(400).json({ success: false, message: "Email already in use" });


        //Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //fields to be used while creating user
        let updateFields = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            bloodGroup,
            age,
            citizenShipNumber,
            gender,
            contact,
            role,
            lastDonationDate,
            // profilePicture
        }

        //upload file to cloudonary and get its url
        // if (profileImageFile) {
        //     const profileImageUrl = await uploadToCloudinary(profileImageFile);
        //     updateFields.profilePicture = profileImageUrl;
        // }

        // if (citizenshipImageFile) {
        //     const citizenshipImageUrl = await uploadToCloudinary(citizenshipImageFile);
        //     updateFields.citizenshipPhoto = citizenshipImageUrl;
        // }

        //create a new user from usermodel using above info
        const newUser = new userModel(updateFields)

        if (newUser) {
            await newUser.save();

            //JWT controller
            generateTokenAndSetCookie(newUser._id, res);

            //send the response with success message and created user info
            return res.status(200).json({
                success: true, user: {
                    ...newUser,
                    password: undefined
                }
            })
        } else {
            return res.status(400).json({ success: false, message: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in SignUp \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
        // return res.json({ message: "Internal Server Error" });
    }

}

export const login = async (req, res) => {
    try {
        //fetch username and password from frontend
        const { email, password } = req.body;

        console.log(email, password)

        //find the user and check if credentials are correct
        const user = await userModel.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect)
            return res.status(400).json({ success: false, message: "Invalid Credentials" })

        //generate token if everything went right and response
        generateTokenAndSetCookie(user._id, res);

        return res.status(201).json({
            success: true, user: {
                ...user, password: undefined
            }
        });

    } catch (error) {
        console.log("Error in Login \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try {
        //delete token by setting expire time to current time
        res.cookie("token", "", { maxAge: 0 });
        return res.status(200).json({ success: true, message: "Logged Out Successfully" });

    } catch (error) {
        console.log("Error in Login \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const checkAuth = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token)
            return res.status(200).json({ success: true, result: { isAuthenticated: false } });

        const payLoad = jwt.verify(token, process.env.JWT_SECRET);

        if (!payLoad)
            return res.status(200).json({ success: true, result: { isAuthenticated: false } });

        req.userId = payLoad.userId;

        const user = await userModel.findById(payLoad.userId);
        return res.status(200).json({ success: true, result: { isAuthenticated: true, user: {_id: user._id, email: user.email} } });

    } catch (error) {
        console.log("Error in checkAuth \n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}