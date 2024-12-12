import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    latitude: {type:Number, required:true},
    longitude: {type:Number, required:true},
});

const locationModel = mongoose.models.locationModel || mongoose.model("locationModel", locationSchema);

export default locationModel;