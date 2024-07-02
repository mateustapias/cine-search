export interface IReview {
  // id deveria ser opcional?
  // id?: number;
  id?: number;
  rating: number;
  text: string;
  userId: number;
  movieId: number;
}

export interface IReviewModel {
  findAllByUser(userId: number): Promise<IReview[] | null>;
  findOneByUserAndMovie(userId: number, movieId: number): Promise<IReview | null>;
  findAllByMovie(movieId: number): Promise<IReview[] | null>;
  createMany(reviews: IReview[]): Promise<IReview[] | null>;
  createOne(review: IReview): Promise<IReview | null>;
  updateOne(review: IReview): Promise<boolean>;
  deleteOne(id: number): Promise<boolean>;
}
