import cookieParser from "cookie-parser";
import multer from "multer"
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDatabase from "./database/connection.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


//route middlewares
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);



app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hello world" });
});

app.listen(PORT, () => {
  connectToDatabase();
  console.log("Listening on port", PORT);
});
