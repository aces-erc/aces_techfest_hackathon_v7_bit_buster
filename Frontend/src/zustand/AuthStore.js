import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import { useToast } from '@/hooks/use-toast';

// const { toast } = useToast();

export const UseAuthStore = create((set, get) => ({
    authUser: null,

    checkAuth: async () => {
        try {

            const response = await axiosInstance.get("/auth/checkAuth");
            if (!response) {
                // toast.error("Bad Request");
                // toast({
                //     variant: "destructive",
                //     title: "Request Failed"
                // })
                return
            }
            console.log(response.data);

            if (!response.data.success) {
                // toast({
                //     variant: "destructive",
                //     title: "Request Failed",
                //     description: response.data.message,
                // })
                return
            }

            console.log(response.data.user);


            set({ authUser: response.data.result.user })


        } catch (error) {
            // toast({
            //     variant: "destructive",
            //     title: "Request Failed",
            //     description: error.response.data.message,
            // })
        }
    },
}))