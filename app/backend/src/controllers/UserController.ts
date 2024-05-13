import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/UserService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  async logIn(req: Request, res: Response) {
    const logInData = req.body;

    const { status, data } = await this.userService.logIn(logInData);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async signUp(req: Request, res: Response) {
    const signUpData = req.body;

    const { status, data } = await this.userService.signUp(signUpData);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
