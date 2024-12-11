import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hello world" });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
