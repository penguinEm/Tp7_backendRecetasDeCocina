import { validationResult } from "express-validator";

export const resultadosValidaciones = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errores: errors.array() });
  }
  next();
};
