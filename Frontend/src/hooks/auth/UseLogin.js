import { axiosInstance } from '@/lib/axios'
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast"

const UseLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {toast} = useToast();
    const login = async (email, password ) => {
        console.log(email, password)
        setIsLoading(true);
        try {
            const response = await axiosInstance.post("/auth/login", { email, password });

            if (!response || !response.data) {
                // toast.error("Request failed!");
                console.log("Request failed")
                toast({
                    variant: "destructive",
                    title: "Request Failed",
                    description: "There was a problem with your request.",
                  })
                return false;
            }

            if (!response.data.success) {
                // toast.error(response.data.message);
                console.log("Failed", response.data.message)
                toast({
                    variant: "destructive",
                    title: "Failed!",
                    description: response.data.message
                  })
                return false;
            }


            // setCurrentUser(response.data.result.user);
            console.log("Login succesful")
            toast({
                description: "Login Successful!",
              })

            // toast.success("Logged in successfully");
            return true;
        } catch (error) {
            console.log(error);
            // toast.error(error.response?.data.message);
            console.log("failed")
            toast({
                variant: "destructive",
                title: "Failed!",
                description: error.response?.data.message
              })
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    return { login, isLoading };
}

export default UseLogin