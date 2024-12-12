import express from 'express';
import { getActiveDonors } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get("/active-donors", getActiveDonors);
userRouter.get("/donor/:id", getDonorById);
userRouter.get("/doctors", getDoctors);

export default userRouter;