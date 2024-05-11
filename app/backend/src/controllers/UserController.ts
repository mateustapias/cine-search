import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/UserService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  async logIn(req: Request, res: Response) {
    const loginData = req.body;

    const { status, data } = await this.userService.logIn(loginData);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
