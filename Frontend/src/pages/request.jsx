import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { axiosInstance } from "../lib/axios";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
  const {authUser} = UseAuthStore();
  const [formData, setFormData] = useState({
    requestUserId: authUser._id,
    bloodGroup: "",
    urgencyLevel: "",
    longitude: "",
    latitude: "",
    status: "active",
  });

  const [position, setPosition] = useState(null);
  // const [hospitals, setHospitals] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const {bloodGroup, requestUserId, status, urgencyLevel} = formData;
    
    const res = await fetch("http://localhost:8000/api/request/create-request", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({bloodGroup, requestUserId, status, urgencyLevel, longitude: position.lng, latitude: position.lat}),
      credentials: "include"
    });
    const data = await res.json()

    console.log(data)
    // Add your submission logic here
  };


  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="gap-4 flex flex-col sm:grid sm:grid-cols-2 border-2 border-gray-200 p-4 rounded-md my-4 space-y-4 min-h-screen sm:min-h-full">
        <legend className="text-3xl text-left font-semibold">
          Request Blood
        </legend>
        <div className="flex flex-col">
          <label htmlFor="bloodGroup" className="block text-sm font-medium">
            Blood Group
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("bloodGroup", value)}
            value={formData.bloodGroup}
            required
          >
            <SelectTrigger id="bloodGroup">
              {formData.bloodGroup || "Select Blood Group"}
            </SelectTrigger>
            <SelectContent>
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
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="urgencyLevel" className="block text-sm font-medium">
            Urgency Level
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("urgencyLevel", value)}
            value={formData.urgencyLevel}
            required
          >
            <SelectTrigger id="urgencyLevel">
              {formData.urgencyLevel || "Select Urgency Level"}
            </SelectTrigger>
            <SelectContent>
              {["Immediate", "24 Hours", "3 Days"].map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* <div className="flex flex-col">
          <label htmlFor="hospitalId" className="block text-sm font-medium">
            Hospital ID
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("hospital", value)}
            value={formData.hospital}
            required
          >
            <SelectTrigger id="hospital">{formData.hospital || "Hospital"}</SelectTrigger>
            <SelectContent>
              {hospitals.map((hospital) => (
                <SelectItem key={hospital._id} value={hospital.firstName}>
                {hospital.firstName}
              </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* <Input
          id="hospitalId"
          name="hospitalId"
          value={formData.hospitalId}
          onChange={handleInputChange}
          placeholder="Enter Hospital ID"
          required
        />
        </div> */}
        <div className="flex flex-col col-span-2 group">
          <label htmlFor="locationId" className="block text-sm font-medium">
            Location ID
          </label>
          <div
            id="locationId"
            name="locationId"
            value={formData.locationId}
            onChange={handleInputChange}
            placeholder="Enter Location ID"
            required
          >
            Choose recepient location
            {position?.lat}, {position?.lng}
          </div>
          <div className="h-96 group-hover:block hidden">
            <MapContainer
              center={[26.7929645, 87.2897815]} // Default center
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker position={position} setPosition={setPosition} />
            </MapContainer>
          </div>
        </div>

        <Button type="submit" className="col-span-2 w-min mx-auto">
          Submit Request
        </Button>
      </fieldset>
    </form>
  );
};

export default RequestForm;
