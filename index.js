import express from "express";
import Route from "./routes/Route.js";
import connect from "./database/db";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config({ path: "./config/config.env" });

connect();

app.use(cors());
app.use(express.json());
app.use("/", Route);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
