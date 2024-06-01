import { IMovie, IMovieModel } from '../interfaces/movie';
import SequelizeMovie from '../database/models/SequelizeMovie';
import handleAsyncError from '../utils/handleAsyncError';

export default class MovieModel implements IMovieModel {
  private model = SequelizeMovie;

  async findPopular(limit: number): Promise<IMovie[] | null> {
    const [dbData, error] = await handleAsyncError(this.model.findAll({
      order: [['popularity', 'DESC']],
      limit,
    }));

    if (error) {
      console.error('Error in findPopular:', error);
      return null;
    }

    return dbData;
  }

  async findTopRated(limit: number): Promise<IMovie[] | null> {
    const [dbData, error] = await handleAsyncError(this.model.findAll({
      order: [['vote_average', 'DESC']],
      limit,
    }));

    if (error) {
      console.error('Error in findTopRated:', error);
      return null;
    }

    return dbData;
  }

  async findOne(id: number): Promise<IMovie | null> {
    const [dbData, error] = await handleAsyncError(this.model.findOne({
      where: { id },
    }));

    if (error) {
      console.error('Error in findOne:', error);
      return null;
    }

    return dbData;
  }

  async createOne(movie: IMovie): Promise<IMovie | null> {
    const [dbData, error] = await handleAsyncError(this.model.create(movie));

    if (error) {
      console.error('Error in createOne:', error);
      return null;
    }

    return dbData;
  }
}