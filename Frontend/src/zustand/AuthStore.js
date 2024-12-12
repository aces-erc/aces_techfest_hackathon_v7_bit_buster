import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';


export const UseAuthStore = create((set, get) => ({
    authUser: null,

    checkAuth: async () => {
        try {
            
            const response = await axiosInstance.get("/auth/checkAuth");
            if (!response) {
                // toast.error("Bad Request");
                return
            }
            console.log(response.data);

            if (!response.data.success) {
                // toast.error(response.data.message);
                return
            }

            console.log(response.data.user);
            

            set({ authUser: response.data.result.user })
            // console.log(get().authUser);
            

        } catch (error) {
            // toast.error(error.response.data.message);
        }
    },
}))