import { Router } from "express";
import { dashboard } from "../controllers/controllers.dashboard.js";
const rutaDash = Router();
rutaDash.get("/", dashboard);
export default rutaDash;