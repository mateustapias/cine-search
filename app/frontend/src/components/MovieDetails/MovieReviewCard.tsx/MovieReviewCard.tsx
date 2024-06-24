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
    // text: {
    //   content: review.text || '',
    //   length: review.text.length || 0,
    // },
  };
  const fieldsError = ['text'];
  const maxCharLength = 280;

  const [editMode, setEditMode] = useState(false);
  const [reviewFormData, setreviewFormData] = useState(FORM_INITIAL_STATE);
  const [fieldsErrors, setFieldsErrors, INITIAL_FIELDS_ERRORS] = useErrorMessages(fieldsError);
  const { text } = fieldsErrors;
  const [textAreaLength, setTextAreaLength] = useState<number>(review.text.length);

  useEffect(() => {
    if (isNew) {
      setEditMode(true);
    }
  }, [isNew]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTextAreaLength(value.length);
    setreviewFormData({ ...reviewFormData, [name]: value });
    setFieldsErrors(INITIAL_FIELDS_ERRORS);
  };

  const handleRatingChange = (value: number) => {
    setreviewFormData({ ...reviewFormData, rating: value });
  };

  const handleSubmit = async (type: 'create' | 'update') => {
    try {
      if (type === 'create') {
        await requestAddReview({ ...reviewFormData, movieId });
      } else {
        await requestUpdateReview({ ...reviewFormData, movieId, id: Number(review.id) });
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
        <span
          className='c-movie-review-rating-prompt'
          style={{ backgroundColor: getReviewButtonColor(reviewFormData.rating) }}
        >{reviewFormData.rating}</span>
        <div className='c-movie-review-author'>
          <img src={defaultUserIcon} alt='User Icon' />
          <h2>{review.user?.username}</h2>
        </div>
        {isFromUser && (
          editMode ? (
            <button className='c-btn-exit-edit-review' onClick={() => setEditMode(false)}>X</button>
          ) : (
            <button className='c-btn-edit-review' onClick={() => setEditMode(true)}>
              <img src={pencilIcon} alt='Edit icon' />
            </button>
          ))}
      </div>
      {editMode ? (<>
        <div className='c-movie-review-rating'>
          <CustomRatingSelector rating={reviewFormData.rating} onChange={handleRatingChange} />
        </div>
        <div className='c-movie-review-text'>
          <textarea name='text' value={reviewFormData.text} onChange={handleChange} autoFocus rows={3} wrap='off'/>
          {text && <div className='c-error-msg'>{text}</div>}
          <span
            className={`c-textarea-length-counter ${textAreaLength > maxCharLength ? 'text-over-limit' : ''}`}
          >{textAreaLength}/{maxCharLength}</span>
        </div>
        <div className='c-btn-submit'>
          {isNew ? (
            <button onClick={() => handleSubmit('create')} type='submit'>Adicionar</button>
          ) : (
            <button onClick={() => handleSubmit('update')} type='submit'>Salvar</button>
          )}
        </div>
      </>
      ) : (
        <div className='c-movie-review-text'>
          <span>{review.text}</span>
        </div>
      )}
    </div >
  );
};

export default MovieReviewCard;
