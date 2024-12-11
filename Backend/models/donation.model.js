import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    donorId:  { type: mongoose.Schema.Types.ObjectId, referece: "userModel", required: true },
    bloodType: { type: String, required: true, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Rh-null"] },
    status: { type: String, required: true, enum: ['completed', "pending"], default: "pending" },
    completeDate: { type: Date | null, required: true },
    receiptPhoto: { type: String, default: "" },
    receipentName: {type: String, required: true},
    receipentId: {type: mongoose.Schema.Types.ObjectId, referece: "userModel"},
    center: {type: mongoose.Schema.Types.ObjectId, referece: "hospitalModel", required: true}
});

const donationModel = mongoose.models.donationModel || mongoose.model("donationModel", donationSchema);

export default donationModel;