import { useEffect, useState } from 'react';
import { Review } from '../../../types';
import { requestAddSeederReviews, requestData, setToken } from '../../services/requests';
import { MovieReviewCard } from './MovieReviewCard';
import { getUserData, useAppContext } from '../../utils';
import '../../styles/components/MovieDetails/MovieReviews.scss';

type MovieReviewsProps = {
  id: number;
};

const MovieReviews = ({ id }: MovieReviewsProps) => {
  const { setShowLogInOrSignUp } = useAppContext();
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

      try {
        const reviewsData = await requestData(`/reviews/movie/${id}`) as Review[];
        // console.log('ain');
        if (userReviewData) {
          const filteredReviewsData = reviewsData.filter(
            (review) => (review.userId !== userReviewData.userId),
          );
          setReviews(filteredReviewsData);
        } else {
          setReviews(reviewsData);
        }
      } catch (error) {
        // console.log('oie');
        await requestAddSeederReviews(id);
        // const seederReviewsData = await requestAddSeederReviews(id);
        // setReviews(seederReviewsData);
        const reviewsData = await requestData(`/reviews/movie/${id}`) as Review[];

        setReviews(reviewsData);
      }
    };

    fetchData();
  }, [id]);

  // const handleAddReviewClick = () => {
  //   setIsAddingReview(true);
  // };

  return (
    <div className='c-outer-movie-reviews'>
      <div className='c-movie-reviews-header'>
        <h1>Resenhas</h1>
        {isLogged ? (
          !userReview && (
            !isAddingReview && (
              <button className='btn-add-review' onClick={() => setIsAddingReview(true)}>
                <div className='c-btn-content'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Adicionar</span>
                </div>
              </button>
            )
          )
        ) : (
          <span className='span-user-not-logged'>Faça <span className='span-login' onClick={() => setShowLogInOrSignUp({
            show: true,
            type: 'logIn',
          })}>login</span> para adicionar/editar sua resenha!</span>
        )}
      </div>
      <div className='c-user-movie-review'>
        {userReview && (
          <MovieReviewCard review={userReview} isFromUser={true} />
        )}
        {isAddingReview && (
          <MovieReviewCard
            review={{
              rating: 0, text: '', user: getUserData(), movieId: id,
            }}
            isFromUser
            isNew
            // DOUBT: Não sei se está correto
            setIsAddingReview={setIsAddingReview}
          />
        )}
      </div>
      {reviews && (
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
