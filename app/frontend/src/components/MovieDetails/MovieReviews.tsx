import { useEffect, useState } from 'react';
import { Review } from '../../../types';
import { requestData } from '../../services/requests';
import MovieReviewCard from './MovieReviewCard';
import '../../styles/components/MovieReviews.scss';

type MovieReviewsProps = {
  id: number;
};

const MovieReviews = ({ id }: MovieReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await requestData(`/reviews/movie/${id}`);

      setReviews(reviewsData);
    };

    fetchData();
  }, [id]);

  return (
    <div className='c-outer-movie-reviews'>
      <div className='c-movie-reviews-title'>
        <h1>Resenhas</h1>
        {reviews
          && reviews.map((review, index) => (
            <div className='c-inner-movie-reviews'>
              <MovieReviewCard key={index} review={review} />
              <MovieReviewCard key={index} review={review} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MovieReviews;
