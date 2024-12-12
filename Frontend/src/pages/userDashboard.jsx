import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, PhoneCallIcon } from "lucide-react";
import { UseAuthStore } from "../zustand/AuthStore";

const UserDashboard = () => {

  const { authUser } = UseAuthStore();
  console.log(authUser);
  const {firstName, lastName, age, bloodGroup, contact, profilePicture} = authUser;
  return (
    <Card className="w-full max-w-7xl mx-auto my-2 shadow-lg">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Section */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative mb-4">
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-blue-100">
                <AvatarImage 
                  src={profilePicture} 
                  alt="User Profile"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl">{firstName[0]}{lastName[0]}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                150
              </div>
            </div>
            
            <div className="text-center w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {firstName} {lastName}
              </h2>
              
              <div className="flex justify-center gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-xs md:text-sm">
                  Age: {age}
                </span>
                <span className="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-xs md:text-sm">
                  {bloodGroup}ve
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm md:text-base">Address</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <PhoneCallIcon className="w-5 h-5" />
                  <span className="text-sm md:text-base">{contact}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 " >
            <div className="bg-blue-50 rounded-lg p-4 text-center shadow-sm flex flex-col justify-around">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Blood Donated</h3>
              <p className="text-2xl font-bold text-blue-700 md:text-5xl">29 times</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center shadow-sm flex flex-col justify-around">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Volume</h3>
              <p className="text-2xl font-bold text-blue-700 md:text-5xl">15 litres</p>
            </div>
            <div className="sm:col-span-2 bg-blue-50 rounded-lg p-4 text-center shadow-sm flex flex-col justify-around">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Lives Saved</h3>
              <p className="text-2xl font-bold text-blue-700 md:text-5xl">90 lives</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDashboard;