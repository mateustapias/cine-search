import { IReview } from '../interfaces/review';
import reviewOverviews from '../utils/reviewOverviews';

function getSeederReviews(amount: number, movieId: number) {
  // Pegando apenas os usuários gerados no seed inicial
  const reviews = [];
  for (let n = 1; n <= amount; n += 1) {
    const reviewOverview = reviewOverviews[Math.floor(Math.random() * 49) + 1];
    const randomAuthorId = Math.floor(Math.random() * 50) + 1;
    const review: IReview = {
      rating: reviewOverview.rating,
      text: reviewOverview.text,
      userId: randomAuthorId,
      movieId,
    };
    reviews.push(review);
  }

  return reviews;
}

export default getSeederReviews;
