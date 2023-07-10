import { Router } from 'express';
import {
  controladorTest,
  crearReceta,
  obtenerListaRecetas,
  obtenerReceta,
} from '../controllers/recetas.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router.route('/recetas').post(crearReceta).get(obtenerListaRecetas);
router.route('/recetas/:id').get(obtenerReceta);

export default router;
