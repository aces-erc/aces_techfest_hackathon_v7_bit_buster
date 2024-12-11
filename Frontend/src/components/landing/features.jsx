import React from "react";
import Feature from "./feature_box";
import { Calendar, Heart, LocateIcon, MapPin, PinIcon, UsersRound } from "lucide-react";

const Features = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold text-left">
          <span className="text-blue-900">Key</span> features
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Feature title="Donor Listing" description="Find and connect with potential blood donors in your area."><UsersRound className="mx-auto" size={64}/></Feature>
        <Feature title="Donor Listing" description="Quickly submit or respond to urgent blood donation requests."><Heart className="mx-auto" size={64}/></Feature>
        <Feature title="Doctor Appointments" description="Schedule convenient appointments for blood donation."><Calendar className="mx-auto" size={64}/></Feature>
        <Feature title="Donor Map" description="Locate nearby donors and donation centers with ease."><MapPin className="mx-auto" size={64}/></Feature>

      </div>
    </div>
  );
};

export default Features;
