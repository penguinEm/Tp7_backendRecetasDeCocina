import { check } from "express-validator";
import { resultadosValidaciones } from "./resultadosValidaciones.js";

export const validacionesProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({
      min: 3,
      max: 50,
    })
    .withMessage(
      "El nombre del producto debe contener entre 3 y 50 caracteres"
    ),

  check("precio")
    .notEmpty()
    .withMessage("El precio es un campo obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un valor numerico")
    .custom((value) => {
      if (value >= 10 && value <= 10000) {
        return true;
      } else {
        throw new Error("El valor del precio debe estar entre $10 y $10.000");
      }
    }),

  check("imagen")
    .notEmpty()
    .withMessage("El campo de la imagen es obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/)
    .withMessage("La imagen debe ser un archivo: jpg, gif, png, jpeg"),

  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un campo obligatorio")
    .isIn(["Panaderia", "Cafeteria", "Reposteria"])
    .withMessage(
      "Debe seleccionar una categoria válida entre: Panaderia, Cafeteria, Reposteria"
    ),

  check("descripcionBreve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({
      min: 4,
      max: 250,
    })
    .withMessage("la descripción breve debe contener entre 4 y 250 caracteres"),

  check("descripcion")
    .notEmpty()
    .withMessage("La descripcion detallada es un dato obligatorio")
    .isLength({
      min: 30,
      max: 1000,
    })
    .withMessage(
      "La descripcion detallada debe contener entre 30 y 1.000 caracteres"
    ),
  (req, res, next) => resultadosValidaciones(req, res, next),
];
