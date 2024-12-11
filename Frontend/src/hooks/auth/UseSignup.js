import { axiosInstance } from '@/lib/axios';
import { useState } from 'react';
// import { toast } from 'react-toastify';

const UseSignup = () => {

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
        gender
    }) => {
        if (!firstName || !email || !password || !confirmPassword || !lastName || !contact || !citizenShipNumber || !role || !bloodGroup || !age || !lastDonationDate || !gender)
            return toast.error("Please fill in all the fields")

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
            formData.append("lastDonationDate", lastDonationDate);
            formData.append("gender", gender);

            if (profileImageFile) {
                formData.append("profileImageFile", profileImageFile);
            }
            if (citizenshipImageFile) {
                formData.append("citizenshipImageFile", citizenshipImageFile);
            }

            const response = await axiosInstance.post("/auth/signup", formData);

            if (!response.data.success) {
                toast.error(response.data.message)
                return false;
            }

            // setCurrentUser(response.data.result.user);

            // toast.success("signup successful");
            return true;
        } catch (error) {
            toast.error(error.response.data.message);
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    return { signup, isLoading }

}

export default UseSignup