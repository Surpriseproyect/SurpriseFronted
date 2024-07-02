import { Router } from "express";
import { cajero } from "../controllers/controllers.cajero.js";

const rutaCajero = Router();

rutaCajero.get("/", cajero)

export default rutaCajero;