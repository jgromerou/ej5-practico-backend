import Usuario from '../models/usuario';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

export const crearUsuario = async (req, res) => {
  try {
    // manejar los errores de la validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { email, password } = new Usuario(req.body);

    let usuario = await Usuario.findOne({ email });
    console.log(usuario);

    if (usuario) {
      return res.status(200).send({
        mensaje: 'ya existe un usuario con el correo electrónico enviado',
      });
    }
    usuario = new Usuario(req.body);

    //encriptar el password
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    res.status(201).json({
      mensaje: 'usuario creado.',
      nombre: usuario.nombre,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'Error no se pudo crear un usuario',
    });
  }
};

export const obtenerListaUsuarios = async (req, res) => {
  try {
    // manejar los errores de la validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    //buscar en la BD la collection de usuarios
    const usuarios = await Usuario.find().select('-password -__v');
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar listar los usuarios',
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    //buscar en la BD un documento Usuario mediante el id
    const usuario = await Usuario.findById(req.params.id).select(
      '-password -__v'
    );
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar obtener el usuario',
    });
  }
};

export const login = async (req, res) => {
  try {
    //extraer el email y password del req.body
    const { email, password } = req.body;

    //verificamos que el email existe en la bd
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      //si el usuario no existe
      return res.status(404).json({
        mensaje: 'Correo o password inválido - correo',
      });
    }

    //verificar si las constraseñas coinciden
    const passwordValido = bcrypt.compareSync(password, usuario.password); //deuvleve un true si los datos coinciden
    if (!passwordValido) {
      return res.status(404).json({
        mensaje: 'Correo o password inválido - password',
      });
    }

    //responder el frontend con el usuario válido
    res.status(200).json({
      mensaje: 'El usuario es correcto',
      nombreUsuario: usuario.nombreUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Usuario o Password incorrecto',
    });
  }
};
