import appointmentModel from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
    try {
        const { doctorId, clientId, date } = req.body;

        const doctor = await userModel.findById(doctorId).select("-password");
        const client = await userModel.findById(clientId).select("-password");

        if (!doctor || !client)
            return res.status(400).json({ success: false, message: "Invalid Request" });

        const newAppointment = await appointmentModel.create({
            doctorId,
            clientId,
            Date: date
        })

        if (newAppointment) {
            await newAppointment.save();
            const appointment = {
                doctor,
                client,
                Date: date
            }
            return res.status(200).json({ success: true, appointment });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}