import Joi from 'joi';
import { schemaErrorMessages } from '../errorMessages';

const logInUserSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': schemaErrorMessages.user.email.required,
      'string.empty': schemaErrorMessages.user.email.empty,
      'string.email': schemaErrorMessages.user.email.invalid,
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'any.required': schemaErrorMessages.user.password.required,
      'string.empty': schemaErrorMessages.user.password.empty,
      'string.min': schemaErrorMessages.user.password.min,
      'string.max': schemaErrorMessages.user.password.max,
    }),
}).options({ abortEarly: false });

const signUpSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': schemaErrorMessages.user.email.required,
      'string.empty': schemaErrorMessages.user.email.empty,
      'string.email': schemaErrorMessages.user.email.invalid,
    }),
  username: Joi.string().required().min(3).max(20)
    .messages({
      'any.required': schemaErrorMessages.user.username.required,
      'string.empty': schemaErrorMessages.user.username.empty,
      'string.min': schemaErrorMessages.user.username.min,
      'string.max': schemaErrorMessages.user.username.max,
    }),
  password: Joi.string().required().min(6).max(20)
    .messages({
      'any.required': schemaErrorMessages.user.password.required,
      'string.empty': schemaErrorMessages.user.password.empty,
      'string.min': schemaErrorMessages.user.password.min,
      'string.max': schemaErrorMessages.user.password.max,
    }),
}).options({ abortEarly: false });

const addReviewSchema = Joi.object({
  rating: Joi.number().integer().required().min(0)
    .max(10)
    .messages({
      'any.required': schemaErrorMessages.review.rating.required,
      'number.base': schemaErrorMessages.review.rating.number,
      'number.empty': schemaErrorMessages.review.rating.empty,
      'number.integer': schemaErrorMessages.review.rating.integer,
      'number.min': schemaErrorMessages.review.rating.min,
      'number.max': schemaErrorMessages.review.rating.max,
    }),
  text: Joi.string().required()
    .messages({
      'any.required': schemaErrorMessages.review.text.required,
      'string.empty': schemaErrorMessages.review.text.empty,
    }),
  movieId: Joi.number().integer().required()
    .messages({
      'any.required': schemaErrorMessages.review.movieId.required,
      'number.base': schemaErrorMessages.review.movieId.number,
    }),
}).options({ abortEarly: false });

const updateReviewSchema = Joi.object({
  id: Joi.number().integer().required()
    .messages({
      'any.required': schemaErrorMessages.review.id.required,
      'number.base': schemaErrorMessages.review.id.number,
    }),
  rating: Joi.number().integer().required().min(0)
    .max(10)
    .messages({
      'any.required': schemaErrorMessages.review.rating.required,
      'number.base': schemaErrorMessages.review.rating.number,
      'number.empty': schemaErrorMessages.review.rating.empty,
      'number.integer': schemaErrorMessages.review.rating.integer,
      'number.min': schemaErrorMessages.review.rating.min,
      'number.max': schemaErrorMessages.review.rating.max,
    }),
  text: Joi.string().required()
    .messages({
      'any.required': schemaErrorMessages.review.text.required,
      'string.empty': schemaErrorMessages.review.text.empty,
    }),
  movieId: Joi.number().integer().required()
    .messages({
      'any.required': schemaErrorMessages.review.movieId.required,
      'number.base': schemaErrorMessages.review.movieId.number,
    }),
}).options({ abortEarly: false });

export default {
  logInUserSchema,
  signUpSchema,
  addReviewSchema,
  updateReviewSchema,
};
