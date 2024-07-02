import { Router } from "express";
import { login, productos, sobrenosotros } from "../controllers/controllers.login.js";
const rutaLogin = Router();
rutaLogin.get("/", login);
rutaLogin.get("/productos", productos);
rutaLogin.get("/sobrenosotros", sobrenosotros);
export default rutaLogin;