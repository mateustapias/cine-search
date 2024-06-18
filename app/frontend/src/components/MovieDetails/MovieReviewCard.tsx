import { useState } from 'react';
import { Review } from '../../../types';
import { defaultUserIcon, pencilIcon } from '../../assets/icons';
import '../../styles/components/MovieReviewCard.scss';

type MovieReviewsProps = {
  review: Review;
  isFromUser: boolean;
};

const MovieReviewCard = ({ review, isFromUser }: MovieReviewsProps) => {
  // Criar outro componente para criação 
  const FORM_INITIAL_STATE = {
    rating: 
  }
  const [editMode, setEditMode] = useState(false);

  return (
    <div className='c-movie-review-card'>
      <div className='c-movie-review-header'>
        <div className='c-movie-review-author'>
          <img src={defaultUserIcon} />
          <h2>
            {review.user?.username}
          </h2>
        </div>
        {isFromUser
          && <button className='c-btn-edit-review' onClick={() => setEditMode(true)}>
            <img src={pencilIcon} />
          </button>
        }
      </div>
      <div className='c-movie-review-rating'>
        <h3>
          Nota: {review.rating}
        </h3>
      </div>
      {editMode
        ? <input
          type='text'

        />
        : <div className='c-movie-review-overview'>
          {review.text}
        </div>
      }
    </div>
  );
};

export default MovieReviewCard;
