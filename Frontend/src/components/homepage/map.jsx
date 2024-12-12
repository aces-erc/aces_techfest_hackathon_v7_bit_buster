import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

const Map = ({donorsData, receptorsData}) => {
  const [currentLocation, setCurrentLocation] = useState([
    26.7929645, 87.2897815,
  ]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  const bins = [
    { id: 1, name: "prabin ko chak 1", lat: 26.7952611, lng: 87.2891011 },
    { id: 2, name: "NeuroBin 2", lat: 26.794893, lng: 87.294081 },
    { id: 3, name: "NeuroBin 3", lat: 26.792109, lng: 87.298796 },
    { id: 4, name: "NeuroBin 4", lat: 26.792436, lng: 87.293279 },
    { id: 5, name: "NeuroBin 5", lat: 26.7989239, lng: 87.29554 },
    { id: 6, name: "NeuroBin 6", lat: 26.789972, lng: 87.290778 },
    { id: 7, name: "NeuroBin 7", lat: 26.801238, lng: 87.289376 },
    // Add more bins as needed
  ];

  const donorMarkerIcon = new L.Icon({
    iconUrl: "/images/redcross.png",
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon that corresponds to the marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });
  
  const receptorMarkerIcon = new L.Icon({
    iconUrl: "/images/greenheart.png",
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon that corresponds to the marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

  return (
    <div id="map" className="rounded-md my-4">
      <MapContainer
        center={currentLocation}
        zoom={13}
        style={{ height: "500px", width: "100%", borderRadius: "6px" }}
        className="z-10"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="rounded-md"
        />
        <Marker position={currentLocation}>
          <Popup>
            This is your current location.&nbsp;
            <span
              onClick={() => {
                location.reload();
              }}
              className="cursor-pointer text-primary"
            >
              Update
            </span>
          </Popup>
        </Marker>
        {donorsData.map((donor) => {
          if(donor.location) return (
          <Marker
            key={donor._id}
            position={[donor?.location?.latitude, donor?.location?.longitude]}
            icon={donorMarkerIcon}
          >
           <Link to={`/user/${donor._id}`}> <Popup>
              <span className="text-lg font-semibold m-2">{donor.firstName}</span>
                <span className="p-1 bg-orange-300 rounded-md">{donor.bloodGroup}</span>
            </Popup>
            </Link>
          </Marker>
          )
})}
        {receptorsData.map((receptors) => {
          if(receptors.locat) return (
          <Marker
            key={receptors.updatedAt}
            position={[receptors?.locat?.lat, receptors?.locat?.long]}
            icon={receptorMarkerIcon}
          >
            <Link to={`/user/${receptors.requestUserId}`}>
            <Popup>
              <span className="text-lg">{receptors.urgencyLevel}</span>
                <span className="p-1 rounded-md bg-red-200 px-2 m-2">{receptors.bloodGroup}</span>
            </Popup>
            </Link>
          </Marker>
          )
})}
      </MapContainer>
    </div>
  );
};

export default Map;
