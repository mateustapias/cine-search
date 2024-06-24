import { ServiceMessage, ServiceResponse } from '../types/ServiceResponse';
import { dataBaseErrorMessage } from './errorMessages';
import { IReview, IReviewModel } from '../interfaces/review';
import ReviewModel from '../models/ReviewModel';

export default class ReviewService {
  constructor(
    private reviewModel: IReviewModel = new ReviewModel(),
  ) { }

  async getAllByUser(userId: number) {
    let serviceResponse: ServiceResponse<IReview[]>;

    const reviews = await this.reviewModel.findAllByUser(userId);

    if (!reviews) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: reviews };
    return serviceResponse;
  }

  async getOneByUserAndMovie(userId: number, movieId: number) {
    let serviceResponse: ServiceResponse<IReview>;

    const review = await this.reviewModel.findOneByUserAndMovie(userId, movieId);

    if (!review) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: review };
    return serviceResponse;
  }

  async getAllByMovie(movieId: number) {
    let serviceResponse: ServiceResponse<IReview[]>;

    const reviews = await this.reviewModel.findAllByMovie(movieId);

    if (!reviews) {
      serviceResponse = {
        status: 'NOT_FOUND', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: reviews };
    return serviceResponse;
  }

  async createReview(review: IReview) {
    let serviceResponse: ServiceResponse<IReview>;

    const newReview = await this.reviewModel.createOne(review);

    if (newReview) {
      serviceResponse = { status: 'CREATED', data: newReview };
      return serviceResponse;
    }

    serviceResponse = {
      status: 'BAD_REQUEST', data: { message: dataBaseErrorMessage },
    };
    return serviceResponse;
  }

  async updateReview(review: IReview): Promise<ServiceResponse<ServiceMessage>> {
    // const review =
    await this.reviewModel.updateOne(review);

    return { status: 'NO_CONTENT', data: { message: 'Review updated' } };
  }

  async deleteReview(id: number): Promise<ServiceResponse<ServiceMessage>> {
    // const review =
    await this.reviewModel.deleteOne(id);

    return { status: 'NO_CONTENT', data: { message: 'Review updated' } };
  }
}
