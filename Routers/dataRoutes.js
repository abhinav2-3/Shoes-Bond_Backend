import express from "express";
import { shoesList } from "../controllers/dataControl.js";
import { createOrders, getOrders } from "../controllers/orderControl.js";

const dataRoutes = express.Router();

dataRoutes.get("/api_items", shoesList);
dataRoutes.get("/orders", getOrders);
dataRoutes.post("/orders", createOrders);

export default dataRoutes;
