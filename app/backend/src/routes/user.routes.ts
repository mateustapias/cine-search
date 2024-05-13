import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import Validations from '../middlewares/validationMiddleware';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/logIn',
  Validations.validateLogIn,
  (req: Request, res: Response) => userController.logIn(req, res),
);

userRouter.post(
  '/signUp',
  Validations.validateSignUp,
  (req: Request, res: Response) => userController.signUp(req, res),
);

export default userRouter;
