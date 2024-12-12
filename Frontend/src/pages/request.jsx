import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    requestUserId: "",
    bloodGroup: "",
    urgencyLevel: "",
    hospitalId: "",
    locationId: "",
    status: "active",
  });

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
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

      <div>
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

      <div>
        <label htmlFor="hospitalId" className="block text-sm font-medium">
          Hospital ID
        </label>
        <Input
          id="hospitalId"
          name="hospitalId"
          value={formData.hospitalId}
          onChange={handleInputChange}
          placeholder="Enter Hospital ID"
          required
        />
      </div>

      <div>
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

      <div>
        <label htmlFor="status" className="block text-sm font-medium">
          Status
        </label>
        <Select
          onValueChange={(value) => handleSelectChange("status", value)}
          value={formData.status}
          required
        >
          <SelectTrigger id="status">{formData.status || "Select Status"}</SelectTrigger>
          <SelectContent>
            {["active", "fulfilled", "cancelled"].map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Submit Request</Button>
    </form>
  );
};

export default RequestForm;
