import { useEffect, useState } from 'react';
import { Review } from '../../../types';
import { requestData, setToken } from '../../services/requests';
import MovieReviewCard from './MovieReviewCard';
import '../../styles/components/MovieReviews.scss';
import { getUserData } from '../../utils';

type MovieReviewsProps = {
  id: number;
};

const MovieReviews = ({ id }: MovieReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>();
  const [userReview, setUserReview] = useState<Review>();

  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await requestData(`/reviews/movie/${id}`);
      setReviews(reviewsData);

      const user = getUserData();

      if (user) {
        setToken(user.token);
        const userReviewData = await requestData(`/reviews/user&movie/${id}`);
        setUserReview(userReviewData);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='c-outer-movie-reviews'>
      <div className='c-movie-reviews-header'>
        <h1>Resenhas</h1>
        {userReview
          ? <div className='c-user-movie-review'>
            <MovieReviewCard review={userReview} isFromUser={true} />
          </div>
          : <button className='btn-add-review'>
            <div className='c-btn-content'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Adicionar</span>
            </div>
          </button>
        }
      </div>
      {reviews
        && reviews.map((review, index) => (
          <div className='c-inner-movie-reviews' key={index}>
            <MovieReviewCard review={review} isFromUser={false} />
            <MovieReviewCard review={review} isFromUser={false} />
          </div>
        ))}
    </div>
  );
};

export default MovieReviews;
