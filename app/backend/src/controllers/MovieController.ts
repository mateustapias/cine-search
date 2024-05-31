import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MovieService from '../services/MovieService';

export default class MovieController {
  constructor(
    private movieService = new MovieService(),
  ) { }

  async getManyMovies(req: Request, res: Response) {
    const { status, data } = await this.movieService.getManyMovies();
    console.log('oi');

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getMovieDetails(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.movieService.getMovie(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
