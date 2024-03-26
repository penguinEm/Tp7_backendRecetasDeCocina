import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 40,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 10000,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;
        return pattern.test(valor);
      },
      message: (dato) => `${dato.value} no es una URL de imagen válida`,
    },
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 35,
  },
  ingredientes: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500,
  },
  preparacion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
});


const Receta = mongoose.model("receta", recetaSchema);
export default Receta;
