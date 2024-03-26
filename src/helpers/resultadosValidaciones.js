import { validationResult } from "express-validator";

//todo:validar los datos del body con express-validator, parte lo hacemos con check desde el archivo de rutas.
export const resultadosValidaciones = (req, res, next) => {
  const errors = validationResult(req);
  //preguntar si hubieron errores
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errores: errors.array() });
  }
  //el next es para que continue con la siguiente instruccion
  next();
};
