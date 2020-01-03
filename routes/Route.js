import express from "express";
import { Main, Admin } from "../controllers/Control";

const Route = express.Router();

Route.route("/").get(Main);
Route.route("/admin").get(Admin);

export default Route;
