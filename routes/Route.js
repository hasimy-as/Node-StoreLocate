import express from "express";

const route = express.Router();

route.get("/", (req, res) => res.end("hi!"));

export default route;
