import MovieModel from '../models/MovieModel';
import { IMovie, IMovieModel } from '../interfaces/movie';
import { ServiceResponse } from '../types/ServiceResponse';

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
}