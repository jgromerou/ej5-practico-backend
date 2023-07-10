import mongoose, { Schema } from 'mongoose';

const recetaSchema = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 120,
  },
  descripcionReceta: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 500,
  },
  ingredientes: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 600,
  },
  instrucciones: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 1300,
  },
  imagen: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const Receta = mongoose.model('receta', recetaSchema);

export default Receta;
