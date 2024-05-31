import Joi from 'joi';
import { schemaErrorMessages } from '../errorMessages';

const logInUserSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': schemaErrorMessages.email.required,
      'string.empty': schemaErrorMessages.email.empty,
      'string.email': schemaErrorMessages.email.invalid,
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'any.required': schemaErrorMessages.password.required,
      'string.empty': schemaErrorMessages.password.empty,
      'string.min': schemaErrorMessages.password.min,
      'string.max': schemaErrorMessages.password.max,
    }),
}).options({ abortEarly: false });

const signUpSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': schemaErrorMessages.email.required,
      'string.empty': schemaErrorMessages.email.empty,
      'string.email': schemaErrorMessages.email.invalid,
    }),
  username: Joi.string().required().min(3).max(20)
    .messages({
      'any.required': schemaErrorMessages.username.required,
      'string.empty': schemaErrorMessages.username.empty,
      'string.min': schemaErrorMessages.username.min,
      'string.max': schemaErrorMessages.username.max,
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'any.required': schemaErrorMessages.password.required,
      'string.empty': schemaErrorMessages.password.empty,
      'string.min': schemaErrorMessages.password.min,
      'string.max': schemaErrorMessages.password.max,
    }),
}).options({ abortEarly: false });

export default {
  logInUserSchema,
  signUpSchema,
};
