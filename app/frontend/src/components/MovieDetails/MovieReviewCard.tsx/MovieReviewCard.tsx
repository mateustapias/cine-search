import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from '../../../../types';
import { defaultUserIcon, pencilIcon } from '../../../assets/icons';
import '../../../styles/components/MovieReviewCard.scss';
import { requestAddReview, requestUpdateReview } from '../../../services/requests';
import CustomRatingSelector from './CustomRatingSelector';

type MovieReviewsProps = {
  review: Review;
  isFromUser?: boolean;
  isNew?: boolean;
};

const MovieReviewCard = ({ review, isFromUser, isNew }: MovieReviewsProps) => {
  const { id } = useParams();
  const movieId = Number(id);
  const FORM_INITIAL_STATE = {
    rating: review.rating || 0,
    text: review.text || '',
  };

  const [editMode, setEditMode] = useState(false);
  const [reviewData, setReviewData] = useState(FORM_INITIAL_STATE);

  useEffect(() => {
    if (isNew) {
      setEditMode(true);
    }
  }, [isNew]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleRatingChange = (value: number) => {
    setReviewData({ ...reviewData, rating: value });
  };

  const handleAddClick = async () => {
    await requestAddReview({ ...reviewData, movieId });
    window.location.reload();
  };

  const handleUpdateClick = () => {
    requestUpdateReview({ ...reviewData, movieId, id: Number(review.id) });
    window.location.reload();
  };

  return (
    <div className='c-movie-review-card'>
      <div className='c-movie-review-header'>
        <div className='c-movie-review-author'>
          <img src={defaultUserIcon} alt='User Icon' />
          <h2>
            {review.user?.username}
          </h2>
        </div>
        {isFromUser && (
          <button className='c-btn-edit-review' onClick={() => setEditMode(true)}>
            <img src={pencilIcon} alt='Edit Icon' />
          </button>
        )}
      </div>
      <div className='c-movie-review-rating'>
        <h3>Nota:</h3>
        {editMode ? (
          <>
            <CustomRatingSelector rating={reviewData.rating} onChange={handleRatingChange} />
            <input type='text' name='text' value={reviewData.text} onChange={handleChange} autoFocus />
            {isNew ? (
              <button onClick={handleAddClick}>Adicionar</button>
            ) : (
              <button onClick={handleUpdateClick}>Salvar</button>
            )}
          </>
        ) : (
          <>
            <span>{review.rating}</span>
            <div className='c-movie-review-overview'>
              {review.text}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieReviewCard;
