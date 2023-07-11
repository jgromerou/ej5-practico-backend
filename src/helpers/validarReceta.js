import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validarReceta = [
  check('nombreReceta')
    .notEmpty()
    .withMessage('El nombre de receta es obligatorio.')
    .isLength({
      min: 2,
      max: 120,
    })
    .withMessage(
      'El nombre del producto debe contener entre 2 y 120 caracteres'
    ),
  check('descripcionReceta')
    .notEmpty()
    .withMessage('La descripción de receta es obligatorio.')
    .isLength({
      min: 2,
      max: 500,
    })
    .withMessage(
      'El nombre del producto debe contener entre 2 y 500 caracteres'
    ),
  check('ingredientes')
    .notEmpty()
    .withMessage('Los ingredientes son obligatorios.')
    .isLength({
      min: 2,
      max: 600,
    })
    .withMessage('Los ingredientes deben contener entre 2 y 600 caracteres'),

  check('instrucciones')
    .notEmpty()
    .withMessage('Las instrucciones son obligatorias.')
    .isLength({
      min: 2,
      max: 1300,
    })
    .withMessage('Las instrucciones debe contener entre 2 y 1300 caracteres'),
  check('imagen')
    .notEmpty()
    .withMessage('La URL de la imagen es un dato obligatorio.')
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/)
    .withMessage(
      'La imagen debe ser una URL válida, terminada en png,jpg,jpeg,gif y svg.'
    ),
  check('categoria')
    .notEmpty()
    .withMessage('La categoria es un dato obligatorio.')
    .isIn(['Dulce', 'Salado', 'Infantiles', 'Apto para Celíacos'])
    .withMessage('La categoria debe ser una opción válida'),

  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarReceta;
