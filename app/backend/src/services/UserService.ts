import { compareSync, hashSync } from 'bcryptjs';
import { IUser, IUserModel } from '../interfaces/user';
import UserModel from '../models/UserModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { SignUp } from '../types/SignUp';
import { LogIn } from '../types/Login';
import jwtUtil from '../utils/jwtUtil';

type LogInResponse = {
  token: string,
  userData: {
    email: string;
    username: string,
  };
};

function getDbDataConflictMessage(dbUser: IUser, signUpUser: SignUp): string {
  let conflictMessage: string;
  if (dbUser.email === signUpUser.email && dbUser.username === signUpUser.username) {
    conflictMessage = 'Email and username already in use';
  } else if (dbUser.email === signUpUser.email) {
    conflictMessage = 'Email already in use';
  } else {
    conflictMessage = 'Username already in use';
  }
  return conflictMessage;
}
export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  async logIn(logInData: LogIn) {
    let serviceResponse: ServiceResponse<LogInResponse>;
    const foundUser = await this.userModel.findOne(logInData.email);

    if (!foundUser || !compareSync(logInData.password, foundUser.password)) {
      serviceResponse = {
        status: 'UNAUTHORIZED', data: { message: 'Email ou senha inválidos' },
      };
      return serviceResponse;
    }

    const {
      id, username, email, role,
    } = foundUser;
    const token = jwtUtil.signToken({
      id, username, email, role,
    });
    serviceResponse = { status: 'SUCCESSFUL', data: { token, userData: { email, username } } };

    return serviceResponse;
  }

  async signUp(signUpData: SignUp) {
    let serviceResponse: ServiceResponse<LogInResponse>;

    const userExists = await this.userModel.findOne(signUpData.email, signUpData.username);
    if (userExists) {
      const message = getDbDataConflictMessage(userExists, signUpData);
      serviceResponse = { status: 'CONFLICT', data: { message } };
      return serviceResponse;
    }

    const cryptedPassword = hashSync(signUpData.password, 2);
    const newUser = await this.userModel.insert({ ...signUpData, password: cryptedPassword });
    const {
      id, username, email, role,
    } = newUser;
    const token = jwtUtil.signToken({
      id, username, email, role,
    });
    serviceResponse = { status: 'SUCCESSFUL', data: { token, userData: { email, username } } };

    return serviceResponse;
  }
}
