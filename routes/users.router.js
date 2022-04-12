const Router = require('express');

const userController = require('../controllers/users.controller');
const validationHandler = require('../middleware/validation.handler');
const {
  createUserSchema,
  updateUserSchema,
  getUserByIdSchema,
} = require('../schemas/users.schema');

const router = Router();

/* GET users listing. */
router.get('/', userController.getAll);
/* Create new user */
router.post(
  '/',
  validationHandler(createUserSchema, 'body'),
  userController.create
);
/* Get single user by ID */
router.get(
  '/:id',
  validationHandler(getUserByIdSchema, 'params'),
  userController.getById
);
/* Update an user DATA */
router.put(
  '/:id',
  validationHandler(getUserByIdSchema, 'params'),
  validationHandler(updateUserSchema, 'body'),
  userController.update
);
/* Delete Given User */
router.delete(
  '/:id',
  validationHandler(getUserByIdSchema, 'params'),
  userController.remove
);

module.exports = router;
