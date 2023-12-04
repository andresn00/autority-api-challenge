import { Router } from 'express';

import * as todosController from '@/controllers/todos'

const router = Router();

router.get('', todosController.getTodos)
router.get('/:id', todosController.getOneTodo)
router.post('', todosController.createTodo)
router.put('/:id', todosController.updateTodo)
router.delete('/:id', todosController.deleteTodo)
router.put('/toggle-complete/:id', todosController.toggleTodoComplete)

export default router
