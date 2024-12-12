import express from 'express';
import multer from 'multer';
import { checkAuth, login, logout, signup } from '../controllers/auth.controller.js';

const authRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

authRouter.post("/signup",upload.fields([{name: "profileImageFile", maxCount:1}, {name: "citizenshipImageFile", maxCount:1}]), signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/checkAuth", checkAuth);

export default authRouter;