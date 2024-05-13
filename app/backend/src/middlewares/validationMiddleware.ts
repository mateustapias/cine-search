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

  static validateSignUp(req: Request, res: Response, next: NextFunction): Response | void {
    const { error } = schema.signUpSchema.validate(req.body);
    if (error) {
      const { type } = error.details[0];
      if (type === 'string.email' || type === 'string.min') {
        return res.status(mapStatusHTTP('UNAUTHORIZED')).json({ message: error.message });
      }
      return res.status(mapStatusHTTP('BAD_REQUEST')).json({ message: error.message });
    }
    next();
  }
}

export default Validations;
