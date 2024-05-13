import IUserModel from '../interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';
import IUser from '../interfaces/users/IUser';
import { SignUp } from '../types/SignUp';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findOne(email: string, username?: string): Promise<IUser | null> {
    const dbData = await this.model.findOne({
      where: { email, username },
    });
    if (dbData === null) return null;

    return dbData;
  }

  async insert(userData: SignUp): Promise<IUser> {
    const newUser = await this.model.create({ ...userData, role: 'user' });
    // if (newUser === null) return null;

    return newUser;
  }
  // async insert(userData: SignUp): Promise<IUser | null> {
  //   const { email, username, password } = userData;
  //   const [user, created] = await this.model.findOrCreate({
  //     where: { email, username },
  //     defaults: {
  //       email,
  //       username,
  //       password,
  //       role: 'user',
  //     },
  //   });
  //   if (user === null) return null;

  //   return user;
  // }
}
