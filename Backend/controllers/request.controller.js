export const createRequest = async (req, res) => {
    try {
        const { urgencyLevel, hospital, bloodGroup } = req.body;
        const requestUserId = req.user._id;
        const request = new requestModel({
            requestUserId,
            bloodGroup,
            urgencyLevel,
            hospital,
        });

        await request.save();
        res.status(201).json({ success: true, message: "Request Created!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}