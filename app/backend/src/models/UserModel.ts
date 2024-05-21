import { Op } from 'sequelize';
import SequelizeUser from '../database/models/SequelizeUser';
import { SignUp } from '../types/SignUp';
import { IUser, IUserModel } from '../interfaces/user';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findOne(email: string, username?: string): Promise<IUser | null> {
    if (username) {
      const dbData = await this.model.findOne({
        where: {
          [Op.or]: [{ email }, { username }],
        },
      });
      return dbData;
    }
    const dbData = await this.model.findOne({
      where: { email },
    });
    return dbData;
  }

  async insert(userData: SignUp): Promise<IUser> {
    const newUser = await this.model.create({ ...userData, role: 'user' });

    return newUser;
  }
}
