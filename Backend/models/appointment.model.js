import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, referece: "userModel", required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, referece: "userModel", required: true },
    Date: { type: Date, required: true },
});

const appointmentModel = mongoose.models.appointmentModel || mongoose.model("appointmentModel", appointmentSchema);

export default appointmentModel;