import { NextFunction, Request, Response } from 'express';
import schema from '../services/validations/schema';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class Validations {
  static validateLogIn(req: Request, res: Response, next: NextFunction): Response | void {
    const { error } = schema.logInUserSchema.validate(req.body);
    if (error) {
      const { type } = error.details[0];
      if (type === 'string.email' || type === 'string.min') {
        return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: error.message });
      }
      return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
    }
    next();
  }

  // Feito de forma diferente
  static validateSignUp(req: Request, res: Response, next: NextFunction): Response | void {
    const result = schema.signUpSchema.validate(req.body);
    if (result.error) {
      const message: { [key: string]: string; } = {};
      result.error.details.forEach((error) => {
        if (error.context?.key) {
          message[error.context.key] = error.message;
        }
      });
      return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message });
    }
    next();
  }

  static validateAddReview(req: Request, res: Response, next: NextFunction): Response | void {
    const result = schema.addReviewSchema.validate(req.body);
    if (result.error) {
      const message: { [key: string]: string; } = {};
      result.error.details.forEach((error) => {
        if (error.context?.key) {
          message[error.context.key] = error.message;
        }
      });
      return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message });
    }
    next();
  }

  static validateUpdateReview(req: Request, res: Response, next: NextFunction): Response | void {
    const result = schema.updateReviewSchema.validate(req.body);
    if (result.error) {
      const message: { [key: string]: string; } = {};
      result.error.details.forEach((error) => {
        if (error.context?.key) {
          message[error.context.key] = error.message;
        }
      });
      return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message });
    }
    next();
  }
}

export default Validations;
