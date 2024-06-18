import { useState, ChangeEvent } from 'react';
import { Review } from '../../../types';
import { defaultUserIcon, pencilIcon } from '../../assets/icons';
import '../../styles/components/MovieReviewCard.scss';

type MovieReviewsProps = {
  review: Review;
  isFromUser: boolean;
};

const MovieReviewCard = ({ review, isFromUser }: MovieReviewsProps) => {
  const FORM_INITIAL_STATE = {
    rating: review.rating || 0,
    text: review.text || '',
  };

  const [editMode, setEditMode] = useState(false);
  const [reviewData, setReviewData] = useState(FORM_INITIAL_STATE);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReviewData({ ...reviewData, [name]: value });
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
        <h3>Nota:
          {editMode ? (
            <input
              type='number'
              name='rating'
              value={reviewData.rating}
              onChange={handleChange}
            />
          ) : (
            <span>{review.rating}</span>
          )}
        </h3>
      </div>
      {editMode ? (
        <input
          type='text'
          name='text'
          value={reviewData.text}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <div className='c-movie-review-overview'>
          {review.text}
        </div>
      )}
    </div>
  );
};

export default MovieReviewCard;
