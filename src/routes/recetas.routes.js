/* Instancio el enrutador de express, el cual me permitira crear rutas */
import { Router } from "express";
import {
  borrarRecetaDB,
  crearRecetaDb,
  editarRecetaDb,
  listarRecetasDb,
  obtenerRecetaDb,
} from "../controllers/recetas.controllers.js";
import { validacionesReceta } from "../helpers/validacionesReceta.js";
const router = Router();

//! Como crear rutas.
router
  .route("/recetas")
  .get(listarRecetasDb)
  .post([validacionesReceta], crearRecetaDb);
router
  .route("/recetas/:id")
  .get(obtenerRecetaDb)
  .put([validacionesReceta], editarRecetaDb)
  .delete(borrarRecetaDB);

export default router;
