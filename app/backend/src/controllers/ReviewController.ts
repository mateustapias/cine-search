import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ReviewService from '../services/ReviewService';
import { IUser } from '../interfaces/user';

export default class ReviewController {
  constructor(
    private reviewService = new ReviewService(),
  ) { }

  async getAllByUser(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.reviewService.getAllByUser(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getOneByUserAndMovie(req: Request, res: Response) {
    const { movieId } = req.params;

    const { id: userId } = res.locals.user as IUser;

    const {
      status, data,
    } = await this.reviewService.getOneByUserAndMovie(userId, Number(movieId));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getAllByMovie(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.reviewService.getAllByMovie(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async createReview(req: Request, res: Response) {
    // TODO: talvez fazer tipagem para os dados do body?
    const reviewData = req.body;

    const { id: userId } = res.locals.user as IUser;

    const { status, data } = await this.reviewService.createReview({ ...reviewData, userId });

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async createManyReviews(req: Request, res: Response) {
    const { movieId } = req.params;

    const { status, data } = await this.reviewService.createSeederReviews(Number(movieId));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async updateReview(req: Request, res: Response) {
    const reviewData = req.body;
    const { id: reviewId } = req.params;
    const { id: userId } = res.locals.user as IUser;

    const { status, data } = await this.reviewService.updateReview(
      { ...reviewData, userId, id: Number(reviewId) },
    );

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async deleteReview(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.reviewService.deleteReview(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
