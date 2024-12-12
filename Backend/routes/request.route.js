import express from 'express';
import { createRequest } from '../controllers/request.controller.js';
import isAuthenticated from '../auth/isAuthenticated.js';

const requestRouter = express.Router();

requestRouter.post("/create-appointment", isAuthenticated, createRequest);

export default requestRouter;