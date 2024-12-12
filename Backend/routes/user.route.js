import express from 'express';
import { getActiveDonors, getDoctors, getDonorById, getHospitals } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get("/active-donors", getActiveDonors);
userRouter.get("/donor/:id", getDonorById);
userRouter.get("/doctors", getDoctors);
userRouter.get("/hospitals", getHospitals);

export default userRouter;