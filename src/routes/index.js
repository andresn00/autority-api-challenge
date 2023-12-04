import { Router } from 'express';
import todosRouter from '@/routes/todos';

import * as homeController from '@/controllers/home';

const router = Router();

router.get('/', homeController.index);

router.get('/health', homeController.healthCheck);

router.use('/todos', todosRouter)

export default router;
