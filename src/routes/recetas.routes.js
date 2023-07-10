import { Router } from 'express';
import {
  controladorTest,
  crearReceta,
  obtenerListaRecetas,
} from '../controllers/recetas.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router.route('/recetas').post(crearReceta).get(obtenerListaRecetas);

export default router;
