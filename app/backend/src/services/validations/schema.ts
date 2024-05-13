import Joi = require('joi');

const anyRequiredMessage = 'All fields must be filled';
const invalidEmailOrPasswordMessage = 'Invalid email or password';

const logInUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
}).messages({
  'any.required': anyRequiredMessage,
  'string.empty': anyRequiredMessage,
  'string.email': invalidEmailOrPasswordMessage,
  'string.min': invalidEmailOrPasswordMessage,
});

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required().min(3),
  password: Joi.string().required().min(6),
}).messages({
  'any.required': anyRequiredMessage,
  'string.empty': anyRequiredMessage,
  'string.email': invalidEmailOrPasswordMessage,
  'string.min': invalidEmailOrPasswordMessage,
});

export default {
  logInUserSchema,
  signUpSchema,
};
