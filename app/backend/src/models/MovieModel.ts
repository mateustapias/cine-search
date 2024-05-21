import { Op } from 'sequelize';
import { SignUp } from '../types/SignUp';
import { IMovie, IMovieModel } from '../interfaces/movie';
import SequelizeMovie from '../database/models/SequelizeMovie';

export default class MovieModel implements IMovieModel {
  private model = SequelizeMovie;

  async findMany(limit: number): Promise<IMovie[] | null> {
    const dbData = await this.model.findAll({
      limit
    })

    return dbData;
  }
}
