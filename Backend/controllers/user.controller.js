import userModel from "../models/user.model.js";

export const getActiveDonors = async (req, res) => {
    try {
        const activeDonors = await userModel.find({ role: "user" }).select("-password");
        res.status(200).json({ success: true, activeDonors });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getDonorById = async (req, res) => {
    try {
        const donor = await userModel.findById(req.params.id).select("-password");
        res.status(200).json({ success: true, donor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getDoctors = async (req, res) => {
    try {
        const doctors = await userModel.find({ role: "doctor" }).select("-password");
        res.status(200).json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getHospitals = async (req, res) => {
    try {
        const hospitals = await userModel.find({ role: "hospital" }).select("-password");
        res.status(200).json({ success: true, hospitals });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getNearbyUsers = async (req, res) => {
    try {
        const { lat1, lon1, lat2, lon2 } = req.body;
        const distance = calculateDistance(lat1, lon1, lat2, lon2);

        const mockNearbyDonors = await userModel.find({ role: "user", isactive: true }).select("-password");

        const nearbyUsers = mockNearbyDonors.sort((a, b) => {
            const distA = calculateDistance(userLocation.lat, userLocation.lng, a.lat, a.lng)
            const distB = calculateDistance(userLocation.lat, userLocation.lng, b.lat, b.lng)
            return distA - distB
        })

        res.status(200).json({ success: true, nearbyUsers, distance });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
}

// const sortedDonors = mockNearbyDonors.sort((a, b) => {
//     const distA = calculateDistance(userLocation.lat, userLocation.lng, a.lat, a.lng)
//     const distB = calculateDistance(userLocation.lat, userLocation.lng, b.lat, b.lng)
//     return distA - distB
// })
