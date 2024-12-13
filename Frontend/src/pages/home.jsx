import React, { useEffect, useState } from 'react'
import { UseAuthStore } from '../zustand/AuthStore'
import { Navigate } from 'react-router-dom';
import Map from '../components/homepage/map';
import { axiosInstance } from '../lib/axios';

const Home = () => {
  const [donors, setDonors] = useState([]);
  const [receptors, setReceptors] = useState([]);

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

  const getRequestsData = async () => {
    try {
      const res = await axiosInstance.get("/request/get-requests");
      if (!res || !res.data) {
        console.log("No response from the server!");
        return [];
      }

      if (!res.data.success) {
        console.log(res.data.message);
        return [];
      }
      return res.data.Requests;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(()=>{
     const fetchDonors = async () => {
      const donorsData = await getDonorsData();
      console.log(donorsData);
      setDonors(donorsData);
    };

    const fetchReceipients = async () => {
      const receptors = await getRequestsData();
      console.log(receptors);
      setReceptors(receptors);
    }
    fetchDonors();
    fetchReceipients();
  },[])
  return (
    <>
    <Map donorsData={donors} receptorsData={receptors}/>
    </>
  )
}

export default Home