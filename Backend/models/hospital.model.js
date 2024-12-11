import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for the blood donation center (hospital or blood bank)
const bloodDonationCenterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,  // Removes any leading/trailing spaces
    },
    type: {
        type: String,
        enum: ['Hospital', 'Blood Bank'],  // Type of the donation center
        required: true,
    },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: "locationModel", required: true },
    contactNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],  // Example of phone number validation
    },
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Please enter a valid email address'],  // Email validation
    },
    availableBloodGroups: {
        type: [String],  // Array of blood types available at the center
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],  // Blood type options
        required: true,
    }
});

// Create the model from the schema
const bloodDonationCenterModel = mongoose.model('bloodDonationCenterModel', bloodDonationCenterSchema);

export default bloodDonationCenterModel;
