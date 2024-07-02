import { IMoviesList, IMoviesListModel } from '../interfaces/moviesList';
import MoviesListModel from '../models/MoviesListModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { dataBaseErrorMessage } from './errorMessages';

export default class MoviesListService {
  constructor(
    private moviesListModel: IMoviesListModel = new MoviesListModel(),
  ) { }

  async getAllByUser(userId: number) {
    let serviceResponse: ServiceResponse<IMoviesList[]>;

    const moviesLists = await this.moviesListModel.findAllByUser(userId);

    if (!moviesLists || moviesLists.length === 0) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: moviesLists };
    return serviceResponse;
  }
}
