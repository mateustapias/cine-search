import { compareSync } from 'bcryptjs';
import IUserModel from '../interfaces//users/IUserModel';
import UserModel from '../models/UserModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwtUtil from '../utils/jwtUtil';
import { Login } from '../types/Login';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  async logIn(logInData: Login) {
    let serviceResponse: ServiceResponse<Token>;
    const foundUser = await this.userModel.findOne(logInData.email);

    if (!foundUser || !compareSync(logInData.password, foundUser.password)) {
      serviceResponse = {
        status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' },
      };
      return serviceResponse;
    }

    const { id, email, role } = foundUser;
    const token = jwtUtil.signToken({ id, email, role });
    serviceResponse = { status: 'SUCCESSFUL', data: { token } };

    return serviceResponse;
  }
}
