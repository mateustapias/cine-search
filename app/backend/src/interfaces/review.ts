export interface IReview {
  id: number;
  rating: number;
  text: string;
  userId: number;
  movieId: number;
}

export interface IReviewModel {
  findAllByUser(userId: number): Promise<IReview[] | null>;
  findAllByMovie(movieId: number): Promise<IReview[] | null>;
  createOne(review: IReview): Promise<IReview | null>;
}
