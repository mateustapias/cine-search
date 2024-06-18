import { Request, Router, Response } from 'express';
import ReviewController from '../controllers/ReviewController';
import AuthMiddleware from '../middlewares/authMiddleware';

const reviewController = new ReviewController();
const reviewRouter = Router();

reviewRouter.get(
  '/user/:id',
  (req: Request, res: Response) => reviewController.getAllByUser(req, res),
);
reviewRouter.get(
  '/user&movie/:movieId',
  AuthMiddleware.auth,
  (req: Request, res: Response) => reviewController.getOneByUserAndMovie(req, res),
);
reviewRouter.get(
  '/movie/:id',
  (req: Request, res: Response) => reviewController.getAllByMovie(req, res),
);
reviewRouter.post(
  '/',
  (req: Request, res: Response) => reviewController.createReview(req, res),
);

export default reviewRouter;
