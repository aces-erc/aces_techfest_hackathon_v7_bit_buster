import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Mail, Phone, Lock, Image, MapPin, Calendar } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Link } from "react-router-dom";
import UseSignup from "../../hooks/auth/UseSignup";

// Leaflet Default Icon Configuration
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Location Marker Component
const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
    },
  });

  return position ? <Marker position={position} /> : null;
};

const SignupPage = () => {
  const avatarRef = useRef(null);
  const citizenshipRef = useRef(null);
  const { signup, isLoading } = UseSignup();

  const [avatar, setAvatar] = useState(null);
  const [citizenship, setCitizenship] = useState(null);
  const [position, setPosition] = useState(null);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    citizenShipNumber: "",
    role: "",
    bloodGroup: "",
    age: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      contact,
      citizenShipNumber,
      role,
      bloodGroup,
      age,
      lastDonationDate,
      password,
      confirmPassword,
      gender,     
    } = userData;
    console.log("Signup data:", { ...userData, avatar, citizenship, position });
    await signup({
      firstName,
      lastName,
      email,
      contact,
      citizenShipNumber,
      role,
      bloodGroup,
      age,
      lastDonationDate,
      password,
      confirmPassword,
      gender,
      citizenship,
      avatar,
      position,
    });
  };

  const updateUserData = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <Card className="w-full max-w-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl font-bold text-red-800">
            Create Your Account
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Join our platform and start your journey
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center">
                  <User className="mr-2 text-red-600 w-5 h-5" />
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={userData.firstName}
                  onChange={(e) => updateUserData("firstName", e.target.value)}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="flex items-center">
                  <User className="mr-2 text-red-600 w-5 h-5" />
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={userData.lastName}
                  onChange={(e) => updateUserData("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="mr-2 text-red-600 w-5 h-5" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) => updateUserData("email", e.target.value)}
                  required
                />
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="flex items-center">
                  <Calendar className="mr-2 text-red-600 w-5 h-5" />
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={userData.age}
                  onChange={(e) => updateUserData("age", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contact" className="flex items-center">
                  <Phone className="mr-2 text-red-600 w-5 h-5" />
                  Contact Number
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  value={userData.contact}
                  onChange={(e) => updateUserData("contact", e.target.value)}
                  required
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role" className="flex items-center">
                  <User className="mr-2 text-red-600 w-5 h-5" />
                  Role
                </Label>
                <Select
                  onValueChange={(value) => updateUserData("role", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="hospital">Hospital</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Blood Group */}
              <div className="space-y-2">
                <Label htmlFor="bloodGroup" className="flex items-center">
                  <User className="mr-2 text-red-600 w-5 h-5" />
                  Blood Group
                </Label>
                <Select
                  onValueChange={(value) => updateUserData("bloodGroup", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Blood Group" />
                  </SelectTrigger>
                  <SelectContent>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                      (group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Citizenship Number */}

              <div className="space-y-2">
                <Label
                  htmlFor="citizenShipNumber"
                  className="flex items-center"
                >
                  <User className="mr-2 text-red-600 w-5 h-5" />
                  Citizenship Number
                </Label>
                <Input
                  id="citizenShipNumber"
                  value={userData.citizenShipNumber}
                  onChange={(e) =>
                    updateUserData("citizenShipNumber", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Location Selection */}
            <div className="space-y-2">
              <Label className="flex items-center">
                <MapPin className="mr-2 text-red-600 w-5 h-5" />
                Select Your Location
              </Label>
              <div className="h-64 border-2 border-red-100 rounded-lg overflow-hidden">
                <MapContainer
                  center={[26.7929645, 87.2897815]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  className="h-full w-full z-10"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                  <LocationMarker
                    position={position}
                    setPosition={setPosition}
                  />
                </MapContainer>
              </div>
              {position && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected Location: {position.lat.toFixed(4)},{" "}
                  {position.lng.toFixed(4)}
                </p>
              )}
            </div>

            {/* Avatar Upload */}
            <div className="space-y-2">
              <Label htmlFor="avatar" className="flex items-center">
                <Image className="mr-2 text-red-600 w-5 h-5" />
                Profile Picture
              </Label>
              <input
                type="file"
                id="avatar"
                ref={avatarRef}
                onChange={(e) => setAvatar(e.target.files[0])}
                className="hidden"
              />
              <div
                onClick={() => avatarRef.current.click()}
                className="border-2 border-dashed border-red-200 p-4 text-center cursor-pointer hover:bg-red-50 transition"
              >
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar"
                    className="w-32 h-32 object-cover mx-auto rounded-full"
                  />
                ) : (
                  <p className="text-gray-600">
                    Click to upload profile picture
                  </p>
                )}
              </div>
            </div>

            {/* Citizenship Photo Upload */}
            <div className="space-y-2">
              <Label htmlFor="citizenship" className="flex items-center">
                <Image className="mr-2 text-red-600 w-5 h-5" />
                Citizenship Photo
              </Label>
              <input
                type="file"
                id="citizenship"
                ref={citizenshipRef}
                onChange={(e) => setCitizenship(e.target.files[0])}
                className="hidden"
              />
              <div
                onClick={() => citizenshipRef.current.click()}
                className="border-2 border-dashed border-red-200 p-4 text-center cursor-pointer hover:bg-red-50 transition"
              >
                {citizenship ? (
                  <img
                    src={URL.createObjectURL(citizenship)}
                    alt="Citizenship"
                    className="w-64 h-32 object-cover mx-auto"
                  />
                ) : (
                  <p className="text-gray-600">
                    Click to upload citizenship photo
                  </p>
                )}
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label className="flex items-center">
                <User className="mr-2 text-red-600 w-5 h-5" />
                Gender
              </Label>
              <RadioGroup
                onValueChange={(value) => updateUserData("gender", value)}
                className="flex space-x-4"
              >
                {["Male", "Female", "Other"].map((gender) => (
                  <div key={gender} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={gender.toLowerCase()}
                      id={gender.toLowerCase()}
                    />
                    <Label htmlFor={gender.toLowerCase()}>{gender}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center">
                  <Lock className="mr-2 text-red-600 w-5 h-5" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={userData.password}
                  onChange={(e) => updateUserData("password", e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center">
                  <Lock className="mr-2 text-red-600 w-5 h-5" />
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={userData.confirmPassword}
                  onChange={(e) =>
                    updateUserData("confirmPassword", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6 bg-red-600 hover:bg-red-700"
            >
              Create Account
            </Button>

            <div className="text-center mt-4">
              <span className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-600 hover:underline font-semibold"
                >
                  Log In
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
