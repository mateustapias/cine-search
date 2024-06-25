import { Request, Router, Response } from 'express';
import ReviewController from '../controllers/ReviewController';
import AuthMiddleware from '../middlewares/authMiddleware';
import Validations from '../middlewares/validationMiddleware';

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
  Validations.validateAddReview,
  AuthMiddleware.auth,
  (req: Request, res: Response) => reviewController.createReview(req, res),
);

reviewRouter.patch(
  '/update/:id',
  AuthMiddleware.auth,
  Validations.validateUpdateReview,
  (req: Request, res: Response) => reviewController.updateReview(req, res),
);
// reviewRouter.patch(
//   '/update',
//   AuthMiddleware.auth,
//   Validations.validateUpdateReview,
//   (req: Request, res: Response) => reviewController.updateReview(req, res),
// );

reviewRouter.delete(
  '/delete/:id',
  AuthMiddleware.auth,
  (req: Request, res: Response) => reviewController.deleteReview(req, res),
);

export default reviewRouter;
