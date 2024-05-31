// import { FindOrCreateOptions } from 'sequelize';
import { IMovie, IMovieModel } from '../interfaces/movie';
import SequelizeMovie from '../database/models/SequelizeMovie';

export default class MovieModel implements IMovieModel {
  private model = SequelizeMovie;

  async findPopular(limit: number): Promise<IMovie[] | null> {
    const dbData = await this.model.findAll({
      order: [['popularity', 'DESC']],
      limit,
    });

    return dbData;
  }

  async findTopRated(limit: number): Promise<IMovie[] | null> {
    const dbData = await this.model.findAll({
      order: [['vote_average', 'DESC']],
      limit,
    });

    return dbData;
  }

  async findOne(id: number): Promise<IMovie | null> {
    const dbData = await this.model.findOne({
      where: { id },
    });

    return dbData;
  }

  async createOne(movie: IMovie): Promise<IMovie | null> {
    const dbData = await this.model.create(movie);

    return dbData;
  }
}
