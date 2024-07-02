import { ServiceMessage, ServiceResponse } from '../types/ServiceResponse';
import { dataBaseErrorMessage } from './errorMessages';
import { IReview, IReviewModel } from '../interfaces/review';
import ReviewModel from '../models/ReviewModel';
import getSeederReviews from '../scripts/getSeederReviews';

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
      // const seederReviews = await this.createSeederReviews(movieId);
      // serviceResponse = { status: 'SUCCESSFUL', data: seederReviews };
      // return seederReviews as ServiceResponse<IReview[]>;
    }

    serviceResponse = { status: 'SUCCESSFUL', data: reviews };
    return serviceResponse;
  }

  async createSeederReviews(movieId: number) {
    let serviceResponse: ServiceResponse<IReview[]>;

    const reviewsAmount = Math.floor(Math.random() * 10) + 1;

    const reviews = getSeederReviews(reviewsAmount, movieId);

    const newReviews = await this.reviewModel.createMany(reviews);

    if (!newReviews) {
      serviceResponse = {
        status: 'BAD_REQUEST', data: { message: dataBaseErrorMessage },
      };
      return serviceResponse;
    }

    serviceResponse = { status: 'CREATED', data: newReviews };
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
    const updated = await this.reviewModel.updateOne(review);

    return updated ? (
      { status: 'NO_CONTENT', data: { message: 'Review updated' } }
    ) : (
      { status: 'BAD_REQUEST', data: { message: dataBaseErrorMessage } }
    );
  }

  async deleteReview(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const deleted = await this.reviewModel.deleteOne(id);

    return deleted ? (
      { status: 'NO_CONTENT', data: { message: 'Review deleted' } }
    ) : (
      { status: 'BAD_REQUEST', data: { message: dataBaseErrorMessage } }
    );
  }
}
