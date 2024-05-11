import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import Validations from '../middlewares/validationMiddleware';

const userController = new UserController();

const logInRouter = Router();

// logInRouter.get('/', (req: Req, res) => {return res.status(200).json({ status: 'FOI!!!!!!'}})
// )

logInRouter.post(
  '/',
  Validations.validateLogIn,
  (req: Request, res: Response) => userController.logIn(req, res),
);

export default logInRouter;
