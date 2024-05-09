import IUserModel from '../interfaces/users/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';
import IUser from '../interfaces/users/IUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findOne(email: string): Promise<IUser | null> {
    const dbData = await this.model.findOne({
      where: { email },
    });
    if (dbData === null) return null;

    return dbData;
  }
}
