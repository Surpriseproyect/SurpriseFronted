import express from "express";
import enrutador from "./routes/index.js";
import ejs from "ejs"
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";
import { dirname } from 'path';
const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.use(express.json())
server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, 'views'));
server.use(cors())

server.use("/", enrutador)

server.use("/", (req, res) => {
    res.render("views.error404.ejs")
})
server.set("port", process.env.PORT || 4000)

export default server;