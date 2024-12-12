import express from 'express';
import { createAppointment } from '../controllers/appointment.controller.js';

const appointmentRouter = express.Router();

appointmentRouter.post("/create-appointment", createAppointment);

export default appointmentRouter;