import { Router } from 'express';
import { controladorTest } from '../controllers/recetas.controllers';

const router = new Router();

router.route('/').get(controladorTest);

export default router;
