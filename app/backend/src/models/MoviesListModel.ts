import SequelizeMoviesList from '../database/models/SequelizeMoviesList';
import SequelizeUser from '../database/models/SequelizeUser';
import { IMoviesList, IMoviesListModel } from '../interfaces/moviesList';

export default class MoviesListModel implements IMoviesListModel {
  private model = SequelizeMoviesList;

  async findAllByUser(userId: number): Promise<IMoviesList[] | null> {
    const moviesLists = await this.model.findAll({
      where: { userId },
      include: [
        {
          model: SequelizeUser,
          attributes: [],
          as: 'user',
        },
      ],
    });

    return moviesLists;
  }
}
