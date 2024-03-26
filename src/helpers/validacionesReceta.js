import { check } from "express-validator";
import { resultadosValidaciones } from "./resultadosValidaciones.js";

export const validacionesReceta = [
  check("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage(
      "El nombre de la receta debe contener entre 2 y 40 caracteres"
    ),

  check("precio")
    .notEmpty()
    .withMessage("El precio es un campo obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un valor numerico")
    .custom((value) => {
      if (value >= 50 && value <= 10000) {
        return true;
      } else {
        throw new Error("El valor del precio debe estar entre $50 y $10.000");
      }
    }),

  check("imagen")
    .notEmpty()
    .withMessage("El campo de la imagen es obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/)
    .withMessage("La imagen debe ser un archivo: jpg, gif, png, jpeg"),

  check("descripcion")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({
      min: 4,
      max: 250,
    })
    .withMessage("la descripción breve debe contener entre 4 y 35 caracteres"),

  check("ingredientes")
    .notEmpty()
    .withMessage("Detallar los ingredientes es un dato obligatorio")
    .isLength({
      min: 10,
      max: 500,
    })
    .withMessage(
      "El detalle de los ingredientes debe contener entre 10 y 500 caracteres"
    ),

  check("preparacion")
    .notEmpty()
    .withMessage("Detallar la preparacion es un dato obligatorio")
    .isLength({
      min: 10,
      max: 1000,
    })
    .withMessage(
      "Detallar la preparacion debe contener entre 10 y 1.000 caracteres"
    ),

  (req, res, next) => resultadosValidaciones(req, res, next),
];
