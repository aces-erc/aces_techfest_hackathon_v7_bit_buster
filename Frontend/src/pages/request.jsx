import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useToast } from "@/hooks/use-toast";
// Import icons
import { Droplet, MapPin, Clock, Hospital, Send } from "lucide-react";

// Fix for default marker icon in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { UseAuthStore } from "../zustand/AuthStore";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Define the LocationMarker Component
const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
    },
  });

  return position ? <Marker position={position} /> : null;
};

const RequestForm = () => {
  const { toast } = useToast();
  const { authUser } = UseAuthStore();
  const [formData, setFormData] = useState({
    requestUserId: authUser._id,
    bloodGroup: "",
    urgencyLevel: "",
    longitude: "",
    latitude: "",
    status: "active",
  });

  const [position, setPosition] = useState({
    lat: 26.7929645,
    lng: 87.2897815,
  });

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { bloodGroup, requestUserId, status, urgencyLevel } = formData;

    try {
      const res = await fetch(
        "http://localhost:8000/api/request/create-request",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bloodGroup,
            requestUserId,
            status,
            urgencyLevel,
            longitude: position.lng,
            latitude: position.lat,
          }),
          credentials: "include",
        }
      );
      const data = await res.json().then((res) => {
        if (res.success) {
          toast({
            variant: "success",
            description: "Request submitted successfully",
          });
        } else {
          toast({
            variant: "destructive",
            description: "Request not submitted",
          });
        }
      });
      console.log(data);
      // TODO: Add success notification or form reset
    } catch (error) {
      console.error("Error submitting request:", error);
      // TODO: Add error handling
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-9xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left Column - Form Fields */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center">
              <Droplet className="mr-2 text-blue-500" />
              Request Blood
            </h2>

            {/* Blood Group Selector */}
            <div>
              <label
                htmlFor="bloodGroup"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Blood Group
              </label>
              <div className="relative">
                <select
                  id="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={(e) =>
                    handleSelectChange("bloodGroup", e.target.value)
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Blood Group</option>
                  {[
                    "A+",
                    "A-",
                    "B+",
                    "B-",
                    "AB+",
                    "AB-",
                    "O+",
                    "O-",
                    "Rh-null",
                  ].map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
                <Droplet
                  className="absolute right-3 top-3 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Urgency Level Selector */}
            <div>
              <label
                htmlFor="urgencyLevel"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Urgency Level
              </label>
              <div className="relative">
                <select
                  id="urgencyLevel"
                  value={formData.urgencyLevel}
                  onChange={(e) =>
                    handleSelectChange("urgencyLevel", e.target.value)
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Urgency Level</option>
                  {["Immediate", "24 Hours", "3 Days"].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                <Clock
                  className="absolute right-3 top-3 text-gray-400"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <MapPin className="mr-2 text-blue-500" size={18} />
                Select Recipient Location
              </label>
              <div className="h-96 rounded-md overflow-hidden border-2 border-gray-200">
                <MapContainer
                  center={[position.lat, position.lng]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <LocationMarker
                    position={position}
                    setPosition={setPosition}
                  />
                </MapContainer>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Click on the map to set the recipient's location
              </p>
              <div className="mt-2 text-sm">
                <span className="font-medium">Coordinates:</span>
                {` ${position.lat.toFixed(4)}, ${position.lng.toFixed(4)}`}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-gray-50 px-6 py-4 flex justify-center">
          <button
            type="submit"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="mr-2" />
            Submit Blood Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
