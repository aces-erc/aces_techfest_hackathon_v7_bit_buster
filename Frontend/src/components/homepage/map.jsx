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
