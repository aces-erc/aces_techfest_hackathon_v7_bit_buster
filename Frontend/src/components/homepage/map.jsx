import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

// Custom marker icons based on urgency level
const getMarkerIcon = (urgencyLevel) => {
  let iconUrl = "/images/greenheart.png"; // Default icon
  let iconClassName = ""; // For potential animations

  switch(urgencyLevel) {
    case "immediately":
      iconUrl = "/images/redcross-urgent.png";
      iconClassName = "animate-pulse"; // Pulsing animation for immediate urgency
      break;
    case "24hours":
      iconUrl = "/images/redcross-high.png";
      iconClassName = "animate-bounce"; // Bouncing animation for 24-hour urgency
      break;
    case "3days":
      iconUrl = "/images/redcross-medium.png";
      iconClassName = "animate-wiggle"; // Subtle wiggle for 3-day urgency
      break;
    default:
      break;
  }

  return L.divIcon({
    className: `custom-marker-icon ${iconClassName}`,
    html: `<img src="${iconUrl}" class="w-8 h-8" />`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

const BloodDonationMap = ({ donorsData, receptorsData }) => {
  const [currentLocation, setCurrentLocation] = useState([26.7929645, 87.2897815]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation([
            position.coords.latitude, 
            position.coords.longitude
          ]);
        },
        (error) => {
          console.error("Error obtaining location", error);
        }
      );
    }
  }, []);

  const handleLocationUpdate = () => {
    location.reload();
  };

  return (
    <div className="relative w-full h-[600px]">
      <MapContainer 
        center={currentLocation} 
        zoom={13} 
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Current Location Marker */}
        <Marker position={currentLocation} icon={getMarkerIcon()}>
          <Popup>This is your current location.</Popup>
        </Marker>

        {/* Donors Markers */}
        {donorsData.map((donor, index) => (
          donor.location && (
            <Marker 
              key={`donor-${index}`}
              position={[donor.location.latitude, donor.location.longitude]}
              icon={getMarkerIcon(donor.urgencyLevel)}
            >
              <Popup>
                <div>
                  <h3>{donor.firstName}</h3>
                  <p>Blood Group: {donor.bloodGroup}</p>
                  <p>Urgency: {donor.urgencyLevel}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}

        {/* Receptors Markers */}
        {receptorsData.map((receptor, index) => (
          receptor.location && (
            <Marker 
              key={`receptor-${index}`}
              position={[receptor.location.latitude, receptor.location.longitude]}
              icon={getMarkerIcon(receptor.urgencyLevel)}
            >
              <Popup>
                <div>
                  <p>Urgency Level: {receptor.urgencyLevel}</p>
                  <p>Blood Group: {receptor.bloodGroup}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>

      <button 
        onClick={handleLocationUpdate}
        className="absolute bottom-4 right-4 z-[1000] bg-primary text-white px-4 py-2 rounded"
      >
        Update Location
      </button>
    </div>
  );
};

export default BloodDonationMap;