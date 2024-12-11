import { axiosInstance } from '@/lib/axios';
import { create } from 'zustand';


export const UseAuthStore = create((set, get) => ({
    authUser: null,

    checkAuth: async () => {
        try {
            const response = await axiosInstance.get("/auth/checkAuth");
            if (!response) {
                // toast.error("Bad Request");
                return
            }

            if (!response.data.success) {
                // toast.error(response.data.message);
                return
            }

            set({ authUser: response.data.user })

        } catch (error) {
            // toast.error(error.response.data.message);
        }
    },
}))