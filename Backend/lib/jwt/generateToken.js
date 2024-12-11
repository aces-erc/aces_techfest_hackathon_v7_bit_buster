import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {

    //generate jwt token using secret that expires in 15 days
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    // save the token in site cookie
    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //expire time in milisecond
        httpOnly: true, //prevent access from javascript preventing xss attack
        sameSite: "strict", //prevent other attack like CSRF
        secure: process.env.NODE_ENV !== "development",
    });
}

export default generateTokenAndSetCookie;