import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockDonors = [
  { id: 1, name: 'John Doe', bloodGroup: 'A+', city: 'New York', contact: '+1234567890' },
  { id: 2, name: 'Jane Smith', bloodGroup: 'B-', city: 'Los Angeles', contact: '+1987654321' },
  { id: 3, name: 'Alice Johnson', bloodGroup: 'O+', city: 'Chicago', contact: '+1122334455' },
  { id: 4, name: 'Bob Williams', bloodGroup: 'AB-', city: 'Houston', contact: '+1555666777' },
  { id: 5, name: 'Charlie Brown', bloodGroup: 'A-', city: 'Phoenix', contact: '+1999888777' },
  { id: 6, name: 'Diana Evans', bloodGroup: 'B+', city: 'Philadelphia', contact: '+1444333222' },
  // Add more mock donors here
]

const Donors = () => {
  const [bloodGroup, setBloodGroup] = useState("")
  return (
    <div className="my-4">
      <h1 className="text-3xl text-left my-2 font-semibold">Donors List</h1>
      <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4">
        <Input
          type="search"
          placeholder="Search by Name or City"
          className=""
        />
        <Select
          onValueChange={(e) => setBloodGroup(e)}
          name="role"
          required
          className=""
        >
          <SelectTrigger className="sm:w-1/3">
            <SelectValue placeholder="Select a blood group" />
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
      <div className="">
      <Table>
      <TableCaption>A list of all the registered blood donors.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Name</TableHead>
          <TableHead className="text-center">Blood Group</TableHead>
          <TableHead className="text-center">Address</TableHead>
          <TableHead className="text-right">Contact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockDonors.map((donor) => (
          <TableRow key={donor.id}>
            <TableCell className="text-left">{donor.name}</TableCell>
            <TableCell className="text-center">{donor.bloodGroup}</TableCell>
            <TableCell className="text-center">{donor.city}</TableCell>
            <TableCell className="text-right">{donor.contact}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
      </div>
    </div>
  );
};

export default Donors;
