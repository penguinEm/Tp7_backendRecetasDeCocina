
import Receta from "../database/models/modelReceta.js";


//! GET de todos las recetas
export const listarRecetasDb = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.error(error);
    res.status(500)({
      mensaje: "Error interno al listar las recetas",
    });
  }
};

//! GET de 1 receta
export const obtenerRecetaDb = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    if (recetaBuscada === null) {
      return res.status(404).json({
        mensaje: "La receta con el id enviado no existe",
      });
    }
    res.status(200).json(recetaBuscada);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "No se pudo encontrar la receta solicitada",
    });
  }
};

//! POST para crear receta
export const crearRecetaDb = async (req, res) => {
  try {
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      mensaje: "La receta fue creada exitosamente!",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "La receta no pudo ser creado, intente nuevamente mas tarde",
    });
  }
};

//! PUT para editar receta por id
export const editarRecetaDb = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    if (recetaBuscada === null) {
      return res.status(404).json({
        mensaje: "No se encontro la receta con el id especificado",
      });
    }
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "Las receta ha sido editado correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error interno del servidor, no se pudo editar la receta",
    });
  }
};

//! DELETE borrar por id
export const borrarRecetaDB = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    if (recetaBuscada === null) {
      return res.status(404).json({
        mensaje: "No se encontro la receta con el id especificado",
      });
    }
    await Receta.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La receta ha sido borrada correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error interno del servidor, no se pudo borrar la receta",
    });
  }
};
