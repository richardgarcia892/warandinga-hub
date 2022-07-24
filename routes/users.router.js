import Router from 'express';

import { getAll, create, getById, update, remove } from '../controllers/users.controller';
import { validationHandler } from '../middleware/validation.handler';
import { createUserSchema, updateUserSchema, getUserByIdSchema } from '../schemas/users.schema';

const router = Router();

/* GET users listing. */
router.get('/', getAll);

/* Create new user */
router.post('/', validationHandler(createUserSchema, 'body'), create);

/* Get single user by ID */
router.get('/:id', validationHandler(getUserByIdSchema, 'params'), getById);

/* Update an user DATA */
router.put('/:id', validationHandler(getUserByIdSchema, 'params'), validationHandler(updateUserSchema, 'body'), update);

/* Delete Given User */
router.delete('/:id', validationHandler(getUserByIdSchema, 'params'), remove);

export default router;
