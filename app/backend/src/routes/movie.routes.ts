import { Request, Router, Response } from 'express';
import MovieController from '../controllers/MovieController';

const movieController = new MovieController();

const movieRouter = Router();

movieRouter.get(
  '/many',
  (req: Request, res: Response) => movieController.getManyMovies(req, res),
);

movieRouter.get(
  '/:id',
(req: Request, res: Response) => movieController)

export default movieRouter;
