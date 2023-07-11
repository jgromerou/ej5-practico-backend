import { Router } from 'express';
import { check } from 'express-validator';
import {
  crearUsuario,
  login,
  obtenerListaUsuarios,
  obtenerUsuario,
} from '../controllers/usuarios.controllers';

const router = new Router();

router.route('/').post(
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password')
      .notEmpty()
      .withMessage('El password es obligatorio.')
      .isLength({
        min: 8,
        max: 70,
      })
      .withMessage('El password debe contener entre 8 y 70 caracteres'),
  ],
  login
);

router
  .route('/usuarios')
  .post(
    [
      check('nombreUsuario', 'El nombre de Usuario es obligatorio').notEmpty(),
      check('email', 'El email es obligatorio').isEmail(),
      check('password')
        .notEmpty()
        .withMessage('El password es obligatorio.')
        .isLength({
          min: 8,
          max: 70,
        })
        .withMessage('El password debe contener entre 8 y 70 caracteres'),
    ],
    crearUsuario
  )
  .get(obtenerListaUsuarios);
router.route('/usuarios/:id').get(obtenerUsuario);

export default router;
