import { SignUp } from '../types/SignUp';

export interface IUser {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserModel {
  findOne(email: string, username?: string): Promise<IUser | null>;
  insert(user: SignUp): Promise<IUser>
}
