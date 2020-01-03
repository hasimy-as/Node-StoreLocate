import express from "express";
import route from "./routes/Route.js";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.LOCAL_PORT || 3001;

dotenv.config({ path: "/config/configuration.env" });

app.use(cors());
app.use(express.json());
app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
