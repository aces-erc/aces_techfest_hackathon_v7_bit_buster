import mongoose, { mongo } from "mongoose";

const requestSchema = new mongoose.Schema({
    requestUserId: { type: mongoose.Schema.Types.ObjectId, referece: "userModel", required: true },
    bloodGroup: { type: String, required: true, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Rh-null"] },
    urgencyLevel: { type: String, required: true, enum: ["Immediate", "24 Hours", "3 Days"] },
    locat: { lat: { type: String, required: true }, long: { type: String, required: true } },
    status: { type: String, required: true, enum: ['active', "fulfilled", "cancelled"], default: "active" }
}, { timestamps: true });

requestSchema.index({ location: '2dsphere' });

const requestModel = mongoose.models.requestModel || mongoose.model("requestModel", requestSchema);

export default requestModel;