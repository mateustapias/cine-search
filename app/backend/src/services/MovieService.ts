import MovieModel from '../models/MovieModel';
import { IMovie, IMovieModel } from '../interfaces/movie';
import { ServiceResponse } from '../types/ServiceResponse';
import requestAPI from '../utils/requestAPI';
import { dataBaseErrorMessage } from './errorMessages';

export default class MovieService {
  constructor(
    private movieModel: IMovieModel = new MovieModel(),
  ) { }

  async getPopularMovies() {
    let serviceResponse: ServiceResponse<IMovie[]>;

    const movies = await this.movieModel.findPopular(32);

    if (!movies) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: movies };
    return serviceResponse;
  }

  async getTopRatedMovies() {
    let serviceResponse: ServiceResponse<IMovie[]>;

    const movies = await this.movieModel.findTopRated(32);

    if (!movies) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: movies };
    return serviceResponse;
  }

  async getMovie(id: number) {
    let serviceResponse: ServiceResponse<IMovie>;

    const movie = await this.movieModel.findOne(id);

    // Procura o filme no banco de dados
    if (movie) {
      serviceResponse = { status: 'SUCCESSFUL', data: movie };
      return serviceResponse;
    }
    // Caso não exista, cria um filme
    return this.createMovie(id);
  }

  async createMovie(id: number) {
    let serviceResponse: ServiceResponse<IMovie>;

    const movieFromAPI = await requestAPI(id);

    const newMovie = await this.movieModel.createOne(
      {
        ...movieFromAPI,
        vote_average: Number(movieFromAPI.vote_average.toFixed(1)),
      },
    );
    if (newMovie) {
      serviceResponse = { status: 'CREATED', data: newMovie };
      return serviceResponse;
    }

    serviceResponse = {
      status: 'BAD_REQUEST', data: { message: dataBaseErrorMessage },
    };
    return serviceResponse;
  }
}
