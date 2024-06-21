import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from '../../../types';
import { defaultUserIcon, pencilIcon } from '../../assets/icons';
import '../../styles/components/MovieReviewCard.scss';
import { requestAddReview, requestUpdateReview } from '../../services/requests';

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
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleAddClick = async () => {
    await requestAddReview({ ...reviewData, movieId });
    window.location.reload();
  };

  const handleUpdateClick = () => {
    // console.log({ ...reviewData, movieId, id: review.id });
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
        <h3>Nota:
          {editMode ? (
            <select
              name='rating'
              value={reviewData.rating}
              onChange={handleChange}
            >
              {[...Array(11).keys()].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
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
      {editMode && (isNew ? (
        <button onClick={handleAddClick}>Adicionar</button>
      ) : (
        <button onClick={handleUpdateClick}>Salvar</button>
      )
      )}
    </div>
  );
};

export default MovieReviewCard;
