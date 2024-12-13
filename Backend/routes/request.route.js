import express from 'express';
import { createRequest, getRequests } from '../controllers/request.controller.js';
import isAuthenticated from '../auth/isAuthenticated.js';

const requestRouter = express.Router();

requestRouter.post("/create-request", isAuthenticated, createRequest);
requestRouter.get("/get-requests", isAuthenticated, getRequests);

export default requestRouter;