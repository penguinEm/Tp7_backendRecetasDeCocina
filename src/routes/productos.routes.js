/* Instancio el enrutador de express, el cual me permitira crear rutas */
import { Router } from "express";
import {
  borrarProducto,
  crearProductoDb,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";
import { validacionesProducto } from "../helpers/validacionesProductos.js";
const router = Router();

//! Como crear rutas.
router
  .route("/productos")
  .get(listarProductos)
  .post([validacionesProducto], crearProductoDb);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put([validacionesProducto], editarProducto)
  .delete(borrarProducto);

export default router;
