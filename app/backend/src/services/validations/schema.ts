import Joi from 'joi';
import errorMessages from './errorMessages';

const logInUserSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': errorMessages.email.required,
      'string.empty': errorMessages.email.empty,
      'string.email': errorMessages.email.invalid,
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'any.required': errorMessages.password.required,
      'string.empty': errorMessages.password.empty,
      'string.min': errorMessages.password.min,
      'string.max': errorMessages.password.max,
    }),
}).options({ abortEarly: false });

const signUpSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': errorMessages.email.required,
      'string.empty': errorMessages.email.empty,
      'string.email': errorMessages.email.invalid,
    }),
  username: Joi.string().required().min(3).max(20)
    .messages({
      'any.required': errorMessages.username.required,
      'string.empty': errorMessages.username.empty,
      'string.min': errorMessages.username.min,
      'string.max': errorMessages.username.max,
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'any.required': errorMessages.password.required,
      'string.empty': errorMessages.password.empty,
      'string.min': errorMessages.password.min,
      'string.max': errorMessages.password.max,
    }),
}).options({ abortEarly: false });

export default {
  logInUserSchema,
  signUpSchema,
};

// import Joi = require('joi');

// const commonMessages: Joi.LanguageMessages = {
//   'string.required': '{#label} deve estar preenchido',
//   'string.empty': '{#label} deve estar preenchido',
//   'string.email': '{{#label}} não é válido',
//   'string.min': '{{#label}} deve ter no mínimo {{#limit}} caracteres',
//   'string.max': '{{#label}} deve ter no máximo {{#limit}} caracteres',
// };

// const logInUserSchema = Joi.object({
//   email: Joi.string().email().required().messages({
//     ...commonMessages,
//   }),
//   password: Joi.string().required().min(6).max(20)
//     .messages({
//       ...commonMessages,
//     }),
// });

// const signUpSchema = Joi.object({
//   email: Joi.string().email().required().messages({
//     ...commonMessages,
//   }),
//   username: Joi.string().required().min(3).max(20)
//     .messages({
//       ...commonMessages,
//     }),
//   password: Joi.string().required().min(6).max(20)
//     .messages({
//       ...commonMessages,
//     }),
// }).options({ abortEarly: false });

// export default {
//   logInUserSchema,
//   signUpSchema,
// };
