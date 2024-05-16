import Joi = require('joi');

const emailMissingMessage = 'O email deve estar preenchido';
const passwordMissingMessage = 'A senha deve estar preenchida';
const passwordMaxLenMessage = 'A senha deve ter no máximo {{#limit}} caracteres';

const logInUserSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': emailMissingMessage,
      'string.empty': emailMissingMessage,
      'string.email': 'O email não é válido',
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'string.required': passwordMissingMessage,
      'string.empty': passwordMissingMessage,
      'string.min': passwordMaxLenMessage,
      'string.max': passwordMaxLenMessage,
    }),
});

const signUpSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': emailMissingMessage,
      'string.empty': emailMissingMessage,
      'string.email': 'O email não é válido',
    }),
  username: Joi.string().required().min(3).max(20)
    .messages({
      'string.required': 'O usuário deve estar preenchido',
      'string.empty': 'O usuário deve estar preenchido',
      'string.min': 'O usuário deve ter no mínimo {{#limit}} caracteres',
      'string.max': 'O usuário deve ter no máximo {{#limit}} caracteres',
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'string.required': passwordMissingMessage,
      'string.empty': passwordMissingMessage,
      'string.min': passwordMaxLenMessage,
      'string.max': passwordMaxLenMessage,
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
