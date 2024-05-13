import { SignUp } from '../../types/SignUp';
import IUser from './IUser';

export default interface IUserModel {
  findOne(email: string): Promise<IUser | null>,
  insert(user: SignUp): Promise<IUser>
}
