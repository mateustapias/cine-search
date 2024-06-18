import { useEffect, useState } from 'react';
import { Review } from '../../../types';
import { requestData } from '../../services/requests';
import MovieReviewCard from './MovieReviewCard';
import '../../styles/components/MovieReviews.scss';
// import { getUserData } from '../../utils';

type MovieReviewsProps = {
  id: number;
};

const MovieReviews = ({ id }: MovieReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await requestData(`/reviews/movie/${id}`);
      setReviews(reviewsData);

      // const user = getUserData();

      // if (user) {

      // }
    };

    fetchData();
  }, [id]);

  return (
    <div className='c-outer-movie-reviews'>
      <div className='c-movie-reviews-header'>
        <h1>Resenhas</h1>
        <button className='btn-add-review'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Adicionar</span>
        </button>
      </div>
      {reviews
        && reviews.map((review, index) => (
          <div className='c-inner-movie-reviews' key={index}>
            <MovieReviewCard review={review} />
            <MovieReviewCard review={review} />
          </div>
        ))}
    </div>
  );
};

export default MovieReviews;
