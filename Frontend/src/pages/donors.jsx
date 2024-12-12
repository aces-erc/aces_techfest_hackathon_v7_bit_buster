import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
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
import { axiosInstance } from "../lib/axios";

const Donors = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [donors, setDonors] = useState([]);

  const getDonorsData = async () => {
    try {
      const res = await axiosInstance.get("/user/active-donors");
      if (!res || !res.data) {
        console.log("No response from the server!");
        return [];
      }

      if (!res.data.success) {
        console.log(res.data.message);
        return [];
      }
      return res.data.activeDonors;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchDonors = async () => {
      const donorsData = await getDonorsData();
      setDonors(donorsData);
    };
    fetchDonors();
  }, []);

  const filteredDonors = donors.filter((donor) => {
    const fullName = `${donor.firstName} ${donor.lastName}`.toLowerCase();
    const city = donor.city?.toLowerCase() || "";
    const matchesSearchTerm = fullName.includes(searchTerm.toLowerCase()) || city.includes(searchTerm.toLowerCase());
    const matchesBloodGroup = bloodGroup === "all" || donor.bloodGroup === bloodGroup || bloodGroup === "";
    return matchesSearchTerm && matchesBloodGroup;
  });

  return (
    <div className="my-4">
      <h1 className="text-3xl text-left my-2 font-semibold">Donors List</h1>
      <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4">
        <Input
          type="search"
          placeholder="Search by Name or City"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          onValueChange={(e) => setBloodGroup(e)}
          name="bloodGroup"
          required
        >
          <SelectTrigger className="sm:w-1/3">
            <SelectValue placeholder="Select a blood group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
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
      <div>
        <Table>
          <TableCaption>
            A list of all the registered blood donors.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-center">Blood Group</TableHead>
              <TableHead className="text-center">City</TableHead>
              <TableHead className="text-right">Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDonors.map((donor) => (
              <TableRow key={donor._id}>
                <TableCell className="text-left">{`${donor.firstName} ${donor.lastName}`}</TableCell>
                <TableCell className="text-center">{donor.bloodGroup}</TableCell>
                <TableCell className="text-center">{donor.city || "N/A"}</TableCell>
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
