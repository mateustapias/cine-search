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
  // Precisa dessa autenticação?
  AuthMiddleware.check,
  (req: Request, res: Response) => reviewController.getAllByMovie(req, res),
);
reviewRouter.post(
  '/create',
  AuthMiddleware.auth,
  (req: Request, res: Response) => reviewController.createReview(req, res),
);
reviewRouter.patch(
  '/update',
  AuthMiddleware.auth,
  (req: Request, res: Response) => reviewController.updateReview(req, res),
);

export default reviewRouter;
