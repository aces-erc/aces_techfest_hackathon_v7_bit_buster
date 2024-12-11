import { axiosInstance } from '@/lib/axios'
import { useState } from 'react';

const UseLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const login = async (email, password ) => {
        console.log(email, password)
        setIsLoading(true);
        try {
            const response = await axiosInstance.post("/auth/login", { email, password });

            if (!response || !response.data) {
                // toast.error("Request failed!");
                console.log("Request failed")
                return false;
            }

            if (!response.data.success) {
                // toast.error(response.data.message);
                console.log("Failed", response.data.message)
                return false;
            }


            // setCurrentUser(response.data.result.user);
            console.log("Login succesful")

            // toast.success("Logged in successfully");
            return true;
        } catch (error) {
            console.log(error);
            // toast.error(error.response?.data.message);
            console.log("failed")
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    return { login, isLoading };
}

export default UseLogin