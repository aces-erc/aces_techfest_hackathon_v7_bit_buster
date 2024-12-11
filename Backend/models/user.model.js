import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Please enter a valid email address'] },
    password: { type: String, required: true, minLength: 6 },
    bloodGroup: { type: String, required: true, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Rh-null"] },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "others"] },
    // locationId: { type: mongoose.Schema.Types.ObjectId, ref: "locationModel", required: true },
    contact: { type: Number, required: true, match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], },
    citizenShipNumber: { type: String, required: true },

    role: { type: String, enum: ['user', "doctor", "hospital/bloodBank"], required: true },
    lastDonationDate: { type: Date , required: true, default: null },
    verificationStatus: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
    // profilePicture: { type: String, required: true },
    // citizenshipPhoto: { type: String, required: true },

    donationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "donationModel" }]
});

const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema);

export default userModel;