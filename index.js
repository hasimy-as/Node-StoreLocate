import express from "express";
import Route from "./routes/Route.js";
import connect from "./database/db";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config({ path: "./config/configuration.env" });

connect();

app.use(cors());
app.use("/", Route);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, console.log(`Server running on ${PORT}`));
