import React, { useEffect, useState } from "react";
import { Search, Droplet, MapPin, Mail, Filter } from "lucide-react";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";

const Donors = () => {
  const navigate = useNavigate();
  const [bloodGroup, setBloodGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [donors, setDonors] = useState([]);

  const getDonorsData = async () => {
    try {
      const res = await axiosInstance.get("/user/active-donors");
      if (!res || !res.data) {
        console.error("No response from the server!");
        return [];
      }

      if (!res.data.success) {
        console.error(res.data.message);
        return [];
      }
      return res.data.activeDonors;
    } catch (error) {
      console.error(error);
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
    const matchesSearchTerm =
      fullName.includes(searchTerm.toLowerCase()) ||
      city.includes(searchTerm.toLowerCase());
    const matchesBloodGroup =
      bloodGroup === "all" ||
      donor.bloodGroup === bloodGroup ||
      bloodGroup === "";
    return matchesSearchTerm && matchesBloodGroup;
  });

  // Blood group color mapping
  const getBloodGroupColor = (bloodGroup) => {
    console.log(bloodGroup.length);
    const colorMap = {
      "A+": "bg-red-100 text-red-800",
      "A-": "bg-red-200 text-red-900",
      "B+": "bg-blue-100 text-blue-800",
      "B-": "bg-blue-200 text-blue-900",
      "AB+": "bg-green-100 text-green-800",
      "AB-": "bg-green-200 text-green-900",
      "O+": "bg-yellow-100 text-yellow-800",
      "O-": "bg-yellow-200 text-yellow-900",
    };
    return colorMap[bloodGroup] || "bg-gray-100 text-gray-800";
  };

  const handleDonorClick = (donorId) => {
    navigate(`/user/${donorId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Droplet className="mr-2" />
            Donors List
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm">{filteredDonors.length} Donors</span>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 bg-gray-50 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={18} />
              </div>
              <input
                type="search"
                placeholder="Search by Name or City"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Blood Group Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="text-gray-400" size={18} />
              </div>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">All Blood Groups</option>
                <option value="all">All</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                  (group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>

        {/* Donors Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Group
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDonors.map((donor, index) => (
                <tr
                  key={donor._id}
                  onClick={() => handleDonorClick(donor._id)}
                  className={`
                    ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} 
                    hover:bg-gray-100 transition-colors cursor-pointer
                  `}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer">
                    {`${donor.firstName} ${donor.lastName}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`
                      px-2 py-1 rounded-full text-xs font-semibold 
                      ${getBloodGroupColor(donor.bloodGroup)}
                    `}
                    >
                      {donor.bloodGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <MapPin className="mr-2 text-gray-400" size={16} />
                      {donor.city || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    <div className="flex items-center justify-end">
                      <Mail className="mr-2 text-gray-400" size={16} />
                      {donor.email}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Results */}
        {filteredDonors.length === 0 && (
          <div className="text-center py-8 bg-gray-50">
            <p className="text-gray-500">
              No donors found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donors;
