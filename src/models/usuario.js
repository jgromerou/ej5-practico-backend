import mongoose, { Schema } from 'mongoose';

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    maxlength: 60,
    required: true,
  },
  email: {
    type: String,
    maxlength: 120,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 70,
  },
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
