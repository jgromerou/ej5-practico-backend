import { Router } from 'express';
import {
  controladorTest,
  crearReceta,
} from '../controllers/recetas.controllers';

const router = new Router();

router.route('/').get(controladorTest);
router.route('/recetas').post(crearReceta);

export default router;
