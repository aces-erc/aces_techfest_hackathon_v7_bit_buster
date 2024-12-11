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

const RegistrationForm = () => {
  const avatarRef = useRef();
  const citizenshipRef = useRef();
  const [avatar, setAvatar] = useState(null);
  const [citizenship, setCitizenship] = useState(null);
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select name="role" required>
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
        <Input id="contact" name="contact" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="blood-group">Blood Group</Label>
        <Select name="blood-group" required>
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
        <Input id="citizenship" name="citizenship" required />
      </div>

      <div className="gspace-y-2">
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
            {avatar ? (
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
      </div>

      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup name="gender" className="flex space-x-4">
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
        <Input id="password" name="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  );
};

export default RegistrationForm;
