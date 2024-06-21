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
  const [isLogged, setIsLogged] = useState(false);
  const [userReview, setUserReview] = useState<Review>();
  const [isAddingReview, setIsAddingReview] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await requestData(`/reviews/movie/${id}`);
      setReviews(reviewsData);

      const user = getUserData();

      if (user) {
        setToken(user.token);
        setIsLogged(true);
        try {
          const userReviewData = await requestData(`/reviews/user&movie/${id}`);
          setUserReview(userReviewData);
        } catch (error) {
          console.log('O usuário não possui uma resenha para esse filme.');
        }
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
        {(isLogged)
          ? !userReview
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
          : (
            <span>Faça login para adicionar uma resenha</span>
          )}
      </div>
      {userReview
        && (
          <div className='c-user-movie-review'>
            <MovieReviewCard review={userReview} isFromUser={true} />
          </div>
        )}
      {isAddingReview && (
        <div className='c-user-movie-review'>
          <MovieReviewCard
            review={{
              rating: 0, text: '', user: getUserData(), movieId: id,
            }}
            isFromUser
            isNew
          />
        </div>
      )}
      {reviews
        && (
          <div className='c-inner-movie-reviews'>
            {reviews.map((review, index) => (
              <MovieReviewCard review={review} key={index}/>
            ))}
          </div>
        )}
    </div>
  );
};

export default MovieReviews;
