import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ReviewService from '../services/ReviewService';

export default class ReviewController {
  constructor(
    private reviewService = new ReviewService(),
  ) { }

  async getAllByUser(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.reviewService.getAllByUser(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getAllByMovie(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.reviewService.getAllByMovie(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async createReview(req: Request, res: Response) {
    const { body } = req;

    const { status, data } = await this.reviewService.createReview(body);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
