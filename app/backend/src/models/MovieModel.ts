// import { FindOrCreateOptions } from 'sequelize';
import { IMovie, IMovieModel } from '../interfaces/movie';
import SequelizeMovie from '../database/models/SequelizeMovie';

export default class MovieModel implements IMovieModel {
  private model = SequelizeMovie;

  async findMany(limit: number): Promise<IMovie[] | null> {
    const dbData = await this.model.findAll({
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

// const findOrCreateOptions: FindOrCreateOptions = {
//   where: { id: movie.id }, // Assumindo que `id` é uma propriedade única para identificar o filme
//   defaults: movie,
// };

// const [dbData] = await this.model.findOrCreate(findOrCreateOptions);
