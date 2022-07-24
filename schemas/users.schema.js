import Joi from 'joi';
import JoiPasswordComplexity from 'joi-password-complexity';

const id = Joi.string();
const email = Joi.string().email();
const userName = Joi.string().max(20);
const password = JoiPasswordComplexity(); // Password complexity Check
const firstName = Joi.string().max(20);
const lastName = Joi.string().max(20);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  userName: userName.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
});

const updateUserSchema = Joi.object({
  userName: userName.required(),
  email: email.required(),
  firstName,
  lastName,
});

const getUserByIdSchema = Joi.object({
  id: id.required(),
});

export { createUserSchema, updateUserSchema, getUserByIdSchema };
