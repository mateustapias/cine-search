import { useState, ChangeEvent, useEffect } from 'react';
import { isAxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import { Review } from '../../../../types';
import { defaultUserIcon, pencilIcon } from '../../../assets/icons';
import '../../../styles/components/MovieReviewCard.scss';
import { requestAddReview, requestUpdateReview } from '../../../services/requests';
import CustomRatingSelector from './CustomRatingSelector';
import getReviewButtonColor from '../../../utils/getReviewButtonColor';
import useErrorMessages from '../../../hooks/useErroMessages';

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
  const fieldsError = ['text'];

  const [editMode, setEditMode] = useState(false);
  const [reviewData, setReviewData] = useState(FORM_INITIAL_STATE);
  const [fieldsErrors, setFieldsErrors, INITIAL_FIELDS_ERRORS] = useErrorMessages(fieldsError);
  const { text } = fieldsErrors;

  useEffect(() => {
    if (isNew) {
      setEditMode(true);
    }
  }, [isNew]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setReviewData({ ...reviewData, [name]: value });
    setFieldsErrors(INITIAL_FIELDS_ERRORS);
  };

  const handleRatingChange = (value: number) => {
    setReviewData({ ...reviewData, rating: value });
  };

  const handleSubmit = async (type: 'create' | 'update') => {
    try {
      if (type === 'create') {
        await requestAddReview({ ...reviewData, movieId });
      } else {
        await requestUpdateReview({ ...reviewData, movieId, id: Number(review.id) });
      }
      window.location.reload();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const { message } = error.response.data;

        // Erro de validação
        if (error.response.status === 400) {
          setFieldsErrors(message);
        }
      }
    }
  };

  return (
    <div className='c-movie-review-card'>
      <div className='c-movie-review-header'>
        {/* {!editMode && (
          <span
            className='c-movie-review-rating-prompt'
            style={{ backgroundColor: getReviewButtonColor(review.rating) }}
          >{review.rating}</span>
        )} */}
        <span
          className='c-movie-review-rating-prompt'
          style={{ backgroundColor: getReviewButtonColor(reviewData.rating) }}
        >{reviewData.rating}</span>
        <div className='c-movie-review-author'>
          <img src={defaultUserIcon} alt='User Icon' />
          <h2>
            {review.user?.username}
          </h2>
        </div>
        {isFromUser && (
          editMode ? (
            <button className='c-btn-exit-edit-review' onClick={() => setEditMode(false)}>X</button>
          ) : (
            <button className='c-btn-edit-review' onClick={() => setEditMode(true)}>
              <img src={pencilIcon} alt='Edit icon' />
            </button>
          ))
        }
      </div>
      {editMode && (
        <div className='c-movie-review-rating'>
          <CustomRatingSelector rating={reviewData.rating} onChange={handleRatingChange} />
        </div>
      )}
      <div className='c-movie-review-text'>
        {editMode ? (<>
          <input type='text' name='text' value={reviewData.text} onChange={handleChange} autoFocus />
          {text && <div className='c-error-msg'>{text}</div>}
        </>
        ) : (
          review.text
        )}
      </div>
      {editMode && (isNew ? (
        <button onClick={() => handleSubmit('create')} type='submit'>Adicionar</button>
      ) : (
        <button onClick={() => handleSubmit('update')} type='submit'>Salvar</button>
      ))}
      {/* <div className='c-movie-review-rating'>
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
            <span
              className='c-movie-review-rating-prompt'
              style={{ backgroundColor: getReviewButtonColor(review.rating) }}
            >{review.rating}</span>
            <div className='c-movie-review-overview'>
              {review.text}
            </div>
          </>
        )}
      </div> */}
    </div >
  );
};

export default MovieReviewCard;
