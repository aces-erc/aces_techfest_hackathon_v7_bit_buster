// import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


const UseSignup = () => {
    const { toast } = useToast();

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
        avatar,
        citizenship
    }) => {
        if (
            !email ||
            !password ||
            !confirmPassword ||
            !contact ||
            !citizenShipNumber ||
            !role ||
            !bloodGroup ||
            !gender ||
            !age ||
            !firstName ||
            !lastName ||
            !avatar ||
            !citizenship
        )
            return toast({
                variant: "destructive",
                description: "Please fill out all the fields",
            });

        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("confirmPassword", confirmPassword);
            formData.append("contact", contact);
            formData.append("citizenShipNumber", citizenShipNumber);
            formData.append("role", role);
            formData.append("bloodGroup", bloodGroup);
            formData.append("age", age);
            formData.append("lastDonationDate", Date.now());
            formData.append("gender", gender);

            formData.append("profileImageFile", avatar);
            formData.append("citizenshipImageFile", citizenship);

            const res = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                body: formData,
                credentials: "include"
            });

            const data = await res.json();



            if (!data.success) {
                // toast.error(response.data.message)
                toast({
                    variant: "destructive",
                    description: data.message,
                });
                console.log(data.message);

                return false;
            }

            toast({ description: "signup successful" });
            console.log("signup successful");

            window.location.reload();
            return true;
        } catch (error) {
            toast({
                variant: "destructive",
                description: error.data.message,
            });
            console.log(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, isLoading };
};

export default UseSignup;
