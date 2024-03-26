import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import recetasRouter from "./src/routes/recetas.routes.js";
import "./src/database/database.js";

//! 1 - Configurar un PUERTO
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

//! 2 - Configurar los MIDDLEWARES - funciones que le dan "habilidades al backend"
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

//! 3 - Configurar las RUTAS


app.use("/api", recetasRouter);

