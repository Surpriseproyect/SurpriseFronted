import { Router } from "express";
import rutaLogin from "./routes.login.js";
import rutaDash from "./routes.dashboard.js";
import rutaCajero from "./routes.cajero.js";
const enrutador = Router();
enrutador.use("/", rutaLogin);
enrutador.use("/dashboard", rutaDash);
enrutador.use("/cajero", rutaCajero);
export default enrutador;