import express from "express";
import { shoesList } from "../controllers/dataControl.js";

const dataRoutes = express.Router();

dataRoutes.get("/api_items", shoesList);

export default dataRoutes;
