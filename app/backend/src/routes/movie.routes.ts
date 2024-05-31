import { Request, Router, Response } from 'express';
import MovieController from '../controllers/MovieController';

const movieController = new MovieController();

const movieRouter = Router();

movieRouter.get(
  '/popular',
  (req: Request, res: Response) => movieController.getPopularMovies(req, res),
);

movieRouter.get(
  '/top-rated',
  (req: Request, res: Response) => movieController.getTopRatedMovies(req, res),
);

movieRouter.get(
  '/:id',
  (req: Request, res: Response) => movieController.getMovieDetails(req, res),
);

export default movieRouter;
