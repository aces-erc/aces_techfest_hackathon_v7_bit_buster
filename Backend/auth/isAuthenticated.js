import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';

const isAuthenticated = async (req, res, next) => {
    try {
        //extract token from cookie
        const token = req.cookies.token;

        //check if token exists or not
        if (!token)
            return res.status(401).json({ success: false, message: "User Not Logged In! 1" });

        //decode the token to get payload
        const decodedPayLoad = jwt.verify(token, process.env.JWT_SECRET);

        //check if token is valid or not
        if (!decodedPayLoad)
            return res.status(401).json({ success: false, message: "User Not Logged In! 2" });

        // find the user with decoded user id
        const user = await userModel.findById(decodedPayLoad.userId).select("-password");

        //check if the user exists or not
        if (!user)
            return res.status(401).json({ success: false, message: "User Not Logged In! 3" });

        //set the user info in req
        req.user = user;

        //pass the control to next function
        next();

    } catch (error) {
        console.log("Error in Authentication\n", error);
        return res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
}

export default isAuthenticated;