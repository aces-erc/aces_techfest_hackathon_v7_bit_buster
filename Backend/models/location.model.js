import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String },
});

const locationModel = mongoose.models.locationModel || mongoose.model("locationModel", locationSchema);

export default locationModel;