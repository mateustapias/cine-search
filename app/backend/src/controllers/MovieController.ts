import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MovieService from '../services/MovieService';

export default class MovieController {
  constructor(
    private movieService = new MovieService(),
  ) { }

  async getManyMovies(req: Request, res: Response) {
    const { status, data } = await this.movieService.getManyMovies();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
