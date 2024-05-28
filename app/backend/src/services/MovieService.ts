import MovieModel from '../models/MovieModel';
import { IMovie, IMovieModel } from '../interfaces/movie';
import { ServiceResponse } from '../types/ServiceResponse';
import requestAPI from '../utils/requestAPI';

export default class MovieService {
  constructor(
    private movieModel: IMovieModel = new MovieModel(),
  ) { }

  async getManyMovies() {
    let serviceResponse: ServiceResponse<IMovie[]>;

    const movies = await this.movieModel.findMany(32);

    if (!movies) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: 'Erro ao consultar o banco de dados' },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: movies };
    return serviceResponse;
  }

  async getMovie(id: number) {
    let serviceResponse: ServiceResponse<IMovie>;

    const movie = await this.movieModel.findOne(id);

    if (movie) {
      serviceResponse = { status: 'SUCCESSFUL', data: movie };
      return serviceResponse;
    }
    return this.createMovie(id);
  }

  async createMovie(id: number) {
    let serviceResponse: ServiceResponse<IMovie>;

    const movieFromAPI = await requestAPI(id);

    const newMovie = await this.movieModel.createOne(movieFromAPI);
    if (newMovie) {
      serviceResponse = { status: 'CREATED', data: newMovie };
      return serviceResponse;
    }

    serviceResponse = {
      status: 'BAD_REQUEST', data: { message: 'Erro ao consultar o banco de dados' },
    };
    return serviceResponse;
  }
}
