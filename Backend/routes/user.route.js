import express from 'express';
import { getActiveDonors, getDoctors, getDonorById } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get("/active-donors", getActiveDonors);
userRouter.get("/donor/:id", getDonorById);
userRouter.get("/doctors", getDoctors);

export default userRouter;