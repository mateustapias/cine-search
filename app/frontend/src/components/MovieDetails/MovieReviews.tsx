import { useEffect, useState } from 'react';
import { Review } from '../../../types';
import { requestData, setToken } from '../../services/requests';
import MovieReviewCard from './MovieReviewCard.tsx/MovieReviewCard';
import '../../styles/components/MovieReviews.scss';
import { getUserData } from '../../utils';

type MovieReviewsProps = {
  id: number;
};

const MovieReviews = ({ id }: MovieReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>();
  const [isLogged, setIsLogged] = useState(false);
  const [userReview, setUserReview] = useState<Review>();
  const [isAddingReview, setIsAddingReview] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const user = getUserData();
      let userReviewData = {} as Review;
      if (user) {
        setToken(user.token);
        setIsLogged(true);
        try {
          userReviewData = await requestData(`/reviews/user&movie/${id}`);
          setUserReview(userReviewData);
        } catch (error) {
          console.log('O usuário não possui uma resenha para esse filme.');
        }
      }

      const reviewsData = await requestData(`/reviews/movie/${id}`) as Review[];
      if (userReviewData) {
        const filteredReviewsData = reviewsData.filter(
          (review) => (review.userId !== userReviewData.userId),
        );
        setReviews(filteredReviewsData);
      } else {
        setReviews(reviewsData);
      }
    };

    fetchData();
  }, [id]);

  const handleAddReviewClick = () => {
    setIsAddingReview(true);
  };

  return (
    <div className='c-outer-movie-reviews'>
      <div className='c-movie-reviews-header'>
        <h1>Resenhas</h1>
        {isLogged
          ? (!userReview
            && (
              <button className='btn-add-review' onClick={handleAddReviewClick}>
                <div className='c-btn-content'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Adicionar</span>
                </div>
              </button>
            )
          ) : (
            <span>Faça login para adicionar uma resenha</span>
          )}
      </div>
      <div className='c-user-movie-review'>
        {userReview
          && (
            <MovieReviewCard review={userReview} isFromUser={true} />
          )}
        {isAddingReview && (
          <MovieReviewCard
            review={{
              rating: 0, text: '', user: getUserData(), movieId: id,
            }}
            isFromUser
            isNew
          />
        )}
      </div>
      {reviews
        && (
          <div className='c-inner-movie-reviews'>
            {reviews.map((review) => (
              <MovieReviewCard review={review} key={review.id} />
            ))}
          </div>
        )}
    </div>
  );
};

export default MovieReviews;
