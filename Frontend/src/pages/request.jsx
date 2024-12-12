import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { axiosInstance } from "../lib/axios";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    requestUserId: "",
    bloodGroup: "",
    urgencyLevel: "",
    hospital: "",
    locationId: "",
    status: "active",
  });

  const [hospitals, setHospitals] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here
  };

  const getHospitals = async () => {
    try {
      const response = await axiosInstance.get("/user/hospitals");

      if (!response || !response.data) {
        console.log("No response from server");
        return [];
      }

      if (!response.data.success) {
        console.log(response.data.message);
        return [];
      }

      return response.data.hospitals;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    const fetchHospitals = async () => {
      const hospitalsData = await getHospitals();
      await setHospitals(hospitalsData);

      console.log(hospitalsData)
    }
    fetchHospitals();
  }, [])


  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="gap-4 flex flex-col sm:grid sm:grid-cols-2 border-2 border-gray-200 p-4 rounded-md my-4 space-y-4 min-h-screen sm:min-h-full">
        <legend className="text-3xl text-left font-semibold">Request Blood</legend>
        <div className="flex flex-col">
          <label htmlFor="bloodGroup" className="block text-sm font-medium">
            Blood Group
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("bloodGroup", value)}
            value={formData.bloodGroup}
            required
          >
            <SelectTrigger id="bloodGroup">{formData.bloodGroup || "Select Blood Group"}</SelectTrigger>
            <SelectContent>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Rh-null"].map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="urgencyLevel" className="block text-sm font-medium">
            Urgency Level
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("urgencyLevel", value)}
            value={formData.urgencyLevel}
            required
          >
            <SelectTrigger id="urgencyLevel">{formData.urgencyLevel || "Select Urgency Level"}</SelectTrigger>
            <SelectContent>
              {["Immediate", "24 Hours", "3 Days"].map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="hospitalId" className="block text-sm font-medium">
            Hospital ID
          </label>
          <Select
            onValueChange={(value) => handleSelectChange("hospital", value)}
            value={formData.hospital}
            required
          >
            <SelectTrigger id="hospital">{formData.hospital || "Hospital"}</SelectTrigger>
            <SelectContent>
              {hospitals.map((hospital) => (
                <SelectItem key={hospital._id} value={hospital.firstName}>
                {hospital.firstName}
              </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* <Input
          id="hospitalId"
          name="hospitalId"
          value={formData.hospitalId}
          onChange={handleInputChange}
          placeholder="Enter Hospital ID"
          required
        /> */}
        </div>
        <div className="flex flex-col">
          <label htmlFor="locationId" className="block text-sm font-medium">
            Location ID
          </label>
          <Input
            id="locationId"
            name="locationId"
            value={formData.locationId}
            onChange={handleInputChange}
            placeholder="Enter Location ID"
            required
          />
        </div>

        <Button type="submit" className="col-span-2 w-min mx-auto">Submit Request</Button>
      </fieldset>
    </form>
  );
};

export default RequestForm;
