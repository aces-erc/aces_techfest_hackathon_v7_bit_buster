import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDatabase from "./database/connection.js";

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "https://localhost:5173",
  credentials: true
}));

//route middlewares




app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hello world" });
});

app.listen(PORT, () => {
  connectToDatabase();
  console.log("Listening on port", PORT);
});
