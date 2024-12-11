import React from "react";
import Feature from "./feature_box";
import { Calendar, Heart, LocateIcon, MapPin, PinIcon, UsersRound } from "lucide-react";

const Features = () => {
  return (
    <div>
      <div>
        <h1>
          <span>Key</span> features
        </h1>
      </div>

      <div>
        <Feature title="Donor Listing" description="Find and connect with potential blood donors in your area."><UsersRound /></Feature>
        <Feature title="Donor Listing" description="Quickly submit or respond to urgent blood donation requests."><Heart /></Feature>
        <Feature title="Doctor Appointments" description="Schedule convenient appointments for blood donation."><Calendar /></Feature>
        <Feature title="Donor Map" description="Locate nearby donors and donation centers with ease."><MapPin /></Feature>

      </div>
    </div>
  );
};

export default Features;
