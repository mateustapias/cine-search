import { compareSync, hashSync } from 'bcryptjs';
import { SignUp } from '../types/SignUp';
import IUserModel from '../interfaces/users/IUserModel';
import UserModel from '../models/UserModel';
import { ServiceResponse } from '../types/ServiceResponse';
// import { Token } from '../types/Token';
import jwtUtil from '../utils/jwtUtil';
import { LogIn } from '../types/Login';

type logInResponse = {
  token: string,
  userData: {
    email: string;
    username: string,
  };
};
export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  async logIn(logInData: LogIn) {
    let serviceResponse: ServiceResponse<logInResponse>;
    const foundUser = await this.userModel.findOne(logInData.email);

    if (!foundUser || !compareSync(logInData.password, foundUser.password)) {
      serviceResponse = {
        status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' },
      };
      return serviceResponse;
    }

    const { id, username, email, role } = foundUser;
    const token = jwtUtil.signToken({ id, username, email, role });
    serviceResponse = { status: 'SUCCESSFUL', data: { token, userData: { email, username } } };

    return serviceResponse;
  }

  async signUp(signUpData: SignUp) {
    let serviceResponse: ServiceResponse<logInResponse>;

    const userExists = await this.userModel.findOne(signUpData.email);
    if (userExists) {
      serviceResponse = {
        status: 'CONFLICT', data: { message: 'Email or username already in use' },
      };
    }
    const cryptedPassword = hashSync(signUpData.password, process.env.JWT_SECRET);
    const newUser = await this.userModel.insert({ ...signUpData, password: cryptedPassword });

    const { id, username, email, role } = newUser;
    const token = jwtUtil.signToken({ id, username, email, role });
    serviceResponse = { status: 'SUCCESSFUL', data: { token, userData: { email, username } } };

    return serviceResponse;
  }
}
