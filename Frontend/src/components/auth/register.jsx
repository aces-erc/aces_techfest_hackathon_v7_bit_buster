import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import UseSignup from "../../hooks/auth/UseSignup";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  // const avatarRef = useRef();
  // const citizenshipRef = useRef();

  // const [avatar, setAvatar] = useState(null);
  // const [citizenship, setCitizenship] = useState(null);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    citizenShipNumber: "",
    role: "user",
    bloodGroup: "",
    age: "",
    lastDonationDate: Date.now(),
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, isLoading } = UseSignup();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const success = await signup(userData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSignup}>
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          value={userData.firstName}
          type="text"
          name="firstName"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          value={userData.lastName}
          type="text"
          name="lastName"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Email</Label>
        <Input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
          type="email"
          name="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Age</Label>
        <Input
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          value={userData.age}
          type="number"
          name="age"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select
          onValueChange={(e) => setUserData({ ...userData, role: e })}
          name="role"
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="doctor">Doctor</SelectItem>
            <SelectItem value="hospital">Hospital</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact">Contact Number</Label>
        <Input
          onChange={(e) =>
            setUserData({ ...userData, contact: e.target.value })
          }
          value={userData.contact}
          name="contact"
          type="tel"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="blood-group">Blood Group</Label>
        <Select
          onValueChange={(e) => setUserData({ ...userData, bloodGroup: e })}
          name="blood-group"
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select blood group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="A+">A+</SelectItem>
            <SelectItem value="A-">A-</SelectItem>
            <SelectItem value="B+">B+</SelectItem>
            <SelectItem value="B-">B-</SelectItem>
            <SelectItem value="AB+">AB+</SelectItem>
            <SelectItem value="AB-">AB-</SelectItem>
            <SelectItem value="O+">O+</SelectItem>
            <SelectItem value="O-">O-</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="citizenship">Citizenship Number</Label>
        <Input
          onChange={(e) =>
            setUserData({ ...userData, citizenShipNumber: e.target.value })
          }
          value={userData.citizenShipNumber}
          id="citizenship"
          name="citizenship"
          required
        />
      </div>

      {/*<div className="gspace-y-2">
        <Label htmlFor="picture">Avatar</Label>
        <Input
          onChange={(e) => setAvatar(e.target.files[0])}
          id="picture"
          type="file"
          placeholder="photo must include both sides"
          className="hidden"
          ref={avatarRef}
        />
        <div className="flex w-full justify-center items-center min-h-8 ">
          <span
            className="h-full mx-8 grid border-dotted border-2 border-indigo-600 items-center cursor-pointer"
            onClick={() => avatarRef.current.click()}
          >
            {avatar ? (
              <img
                src={URL.createObjectURL(avatar)}
                alt="citizenship"
                className="h-24 w-24 object-cover"
              />
            ) : (
              "Upload your photo"
            )}
          </span>
        </div>
      </div>
      <div className="gspace-y-2">
        <Label htmlFor="picture">Citizenship photo</Label>
        <Input
          onChange={(e) => setCitizenship(e.target.files[0])}
          id="picture"
          type="file"
          placeholder="photo must include both sides"
          className="hidden"
          ref={citizenshipRef}
        />
        <div className="flex w-full justify-center items-center min-h-8 ">
          <span
            className="h-full mx-8 grid border-dotted border-2 border-indigo-600 items-center cursor-pointer"
            onClick={() => citizenshipRef.current.click()}
          >
            {citizenship ? (
              <img
                src={URL.createObjectURL(citizenship)}
                alt="citizenship"
                className="h-24 w-24 object-cover"
              />
            ) : (
              "Upload citizenship photo"
            )}
          </span>
        </div>
      </div>*/}

      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup
          onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
          name="gender"
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
          id="password"
          name="password"
          type="password"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          onChange={(e) =>
            setUserData({ ...userData, confirmPassword: e.target.value })
          }
          value={userData.confirmPassword}
          type="password"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  );
};

export default RegistrationForm;
