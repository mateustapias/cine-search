import { Request, Router, Response } from 'express';
import MoviesListController from '../controllers/MoviesListController';

const moviesListController = new MoviesListController();

const moviesListRouter = Router();

moviesListRouter.get(
  '/user/:id',
  (req: Request, res: Response) => moviesListController.getAllByUser(req, res),
);

export default moviesListRouter;
