import requestModel from "../models/request.model.js";

export const createRequest = async (req, res) => {
    try {
        const { urgencyLevel, bloodGroup, latitude, longitude } = req.body;
        const requestUserId = req.user._id;
        console.log(req.body)
        // const request = new requestModel({
        //     requestUserId,
        //     bloodGroup,
        //     urgencyLevel,
        //     location: {latitude, longitude}
        // });
const data = await requestModel.create({
    requestUserId,
    bloodGroup,
    urgencyLevel,
    locat:{
        lat:latitude,
        long:longitude
    }

})
        // await request.save();
        res.status(201).json({ success: true,data, message: "Request Created!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}