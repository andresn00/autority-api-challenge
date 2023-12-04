import db from '@/database';
import { StatusCode } from '../shared/status-code.constants';

const defaultValidationError = 'Validation error'

export const getTodos = async (req, res) => {
    const todos = await db.models.todo.findAll();
    return res.json({ success: true, data: todos });
};

export const getOneTodo = async (req, res) => {
    const id = req.params.id;
    const todo = await db.models.todo.findByPk(id)
    return res.json({ success: true, data: todo })
}

export const createTodo = async (req, res) => {
    try {
        const todo = db.models.todo.build(req.body)
        const todoCreated = await todo.save()
        return res.json({ success: true, data: todoCreated })
    } catch (e) {
        return res.status(StatusCode.BAD_REQUEST).json({
            success: false, message: e.message || defaultValidationError
        })
    }
}

export const updateTodo = async (req, res) => {
    const id = req.params.id;
    const todo = await db.models.todo.findByPk(id)
    if (!todo) {
        return res.status(StatusCode.NOT_FOUND).json({
            success: false, message: `Todo with id ${id} not found`
        })
    }
    try {
        const todoUpdated = await todo.update(req.body)
        return res.json({ success: true, data: todoUpdated })
    } catch (e) {
        return res.status(StatusCode.BAD_REQUEST).json({
            success: false, message: e.message || defaultValidationError
        })
    }
}

export const deleteTodo = async (req, res) => {
    const id = req.params.id;
    const todo = await db.models.todo.findByPk(id)
    if (!todo) {
        return res.status(StatusCode.NOT_FOUND).json({
            success: false, message: `Todo with id ${id} not found`
        })
    }
    await todo.destroy()
    return res.json({ success: true, data: todo })
}

export const toggleTodoComplete = async (req, res) => {
    const id = req.params.id;
    const todo = await db.models.todo.findByPk(id)
    if (!todo) {
        return res.status(StatusCode.NOT_FOUND).json({
            success: false, message: `Todo with id ${id} not found`
        })
    }
    todo.set({ isComplete: !todo.isComplete })
    await todo.save()
    return res.json({ success: true, data: todo })
}
