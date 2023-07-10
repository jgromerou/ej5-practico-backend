import { Router } from 'express';
import {
  borrarReceta,
  controladorTest,
  crearReceta,
  obtenerListaRecetas,
  obtenerReceta,
} from '../controllers/recetas.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router.route('/recetas').post(crearReceta).get(obtenerListaRecetas);
router.route('/recetas/:id').get(obtenerReceta).delete(borrarReceta);

export default router;
