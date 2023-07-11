import { Router } from 'express';
import {
  borrarReceta,
  controladorTest,
  crearReceta,
  editarReceta,
  obtenerListaRecetas,
  obtenerReceta,
} from '../controllers/recetas.controllers';
import validarReceta from '../helpers/validarReceta';

const router = new Router();

router.route('/').get(controladorTest);
router
  .route('/recetas')
  .post(validarReceta, crearReceta)
  .get(obtenerListaRecetas);
router
  .route('/recetas/:id')
  .get(obtenerReceta)
  .delete(borrarReceta)
  .put(validarReceta, editarReceta);

export default router;
