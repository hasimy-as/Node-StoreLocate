import express from "express";
import { getStore, addStore } from "../controllers/Control";

const Route = express.Router();

Route.route("/")
  .get(getStore)
  .post(addStore);

export default Route;
