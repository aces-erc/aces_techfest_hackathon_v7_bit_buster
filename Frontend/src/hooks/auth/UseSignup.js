import { axiosInstance } from '@/lib/axios';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast"
// import { toast } from 'react-toastify';

const UseSignup = () => {
    const {toast} = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const signup = async ({
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
        // avatar,
        // citizenship
    }) => {
        if (!email || !password || !confirmPassword || !contact || !citizenShipNumber || !role || !bloodGroup || !gender)
            return console.log("please fill all the fields");

        // console.log(firstName, lastName, email, contact, citizenShipNumber, role, bloodGroup, age, lastDonationDate, password, confirmPassword, gender, avatar, citizenship);

        // console.log(avatar, citizenship)

        setIsLoading(true);
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


            const response = await axiosInstance.post("/auth/signup", {firstName, lastName, email, password, confirmPassword, contact, citizenShipNumber, role,
                bloodGroup, age, lastDonationDate, gender
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
                  })
                console.log(response.data.message);

                return false;
            }

            // setCurrentUser(response.data.result.user);

            // toast.success("signup successful");
            toast({
                description: "signup successful",
              })
            console.log("signup successful");

            return true;
        } catch (error) {
            toast({
                variant: "destructive",
                description: error.response.data.message,
              })
            console.log(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    return { signup, isLoading }

}

export default UseSignup