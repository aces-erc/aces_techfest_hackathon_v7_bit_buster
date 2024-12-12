import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


const UseSignup = () => {
  const { toast } = useToast();
  const [imgCount, setImgCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (userData) => {
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
      avatar,
      citizenship,
    } = userData;
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !contact ||
      !citizenShipNumber ||
      !role ||
      !bloodGroup ||
      !gender ||
      !avatar ||
      !citizenship
    )
      return console.log("please fill all the fields");

    setIsLoading(true);
    const avatarUrl = await uploadImage(avatar).then((url) => {
      avatar = url;
      setImgCount((prev) => prev + 1);
    });
    const citizenshipUrl = await uploadImage(citizenship).then((url) => {
      citizenship = url;
      setImgCount((prev) => prev + 1);
    });
    if (count == 2) {
      try {
        // const formData = new FormData();
        // formData.append("firstName", "prabin");
        // formData.append("lastName", "Acharya");
        // formData.append("email", email);
        // formData.append("password", password);
        // formData.append("confirmPassword", confirmPassword);
        // formData.append("contact", contact);
        // formData.append("citizenShipNumber", citizenShipNumber);
        // formData.append("role", role);
        // formData.append("bloodGroup", bloodGroup);
        // formData.append("age", 23);
        // formData.append("lastDonationDate", Date.now());
        // formData.append("gender", gender);

        // if (avatar) {
        //     formData.append("profileImageFile", avatar);
        // }
        // if (citizenship) {
        //     formData.append("citizenshipImageFile", citizenship);
        // }

        // console.log(formData);

        const response = await axiosInstance.post("/auth/signup", {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          contact,
          citizenShipNumber,
          role,
          bloodGroup,
          age,
          lastDonationDate,
          gender,
          avatar,
          citizenship
        });
        // const res = await fetch("http://localhost:3000/api/auth/signup", {
        //     method: "POST",
        //     body: formData
        // })

        // const data = await res.json();

        if (!response.data.success) {
          // toast.error(response.data.message)
          toast({
            variant: "destructive",
            description: response.data.message,
          });
          console.log(response.data.message);

          return false;
        }

        // setCurrentUser(response.data.result.user);

        // toast.success("signup successful");
        toast({
          description: "signup successful",
        });
        console.log("signup successful");

        window.location.reload();
        return true;
      } catch (error) {
        toast({
          variant: "destructive",
          description: error.response.data.message,
        });
        console.log(error);
        return false;
      } finally {
        setIsLoading(false);
      }
    }

    return { signup, isLoading };
  };
};

export default UseSignup;
