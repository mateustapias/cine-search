import {
  useState, ChangeEvent, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { Review } from '../../../../types';
import { CustomRatingSelector } from '.';
import { defaultUserIcon, pencilIcon, trashCanIcon } from '../../../assets/icons';
import { requestAddReview, requestDeleteReview, requestUpdateReview } from '../../../services/requests';
import { getReviewButtonColor } from '../../../utils';
import { useErrorMessages } from '../../../hooks';
import '../../../styles/components/MovieReviewCard/MovieReviewCard.scss';

type MovieReviewsProps = {
  review: Review;
  isFromUser?: boolean;
  isNew?: boolean;
  setIsAddingReview?: Dispatch<SetStateAction<boolean>>;
};

const MovieReviewCard = ({
  review, isFromUser, isNew, setIsAddingReview,
}: MovieReviewsProps) => {
  const { id } = useParams();
  const movieId = Number(id);
  const FORM_INITIAL_STATE = {
    rating: review.rating || 0,
    text: review.text || '',
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

  const handleDelete = async () => {
    await requestDeleteReview(Number(review.id));
    window.location.reload();
  };

  const handleExitEditMode = () => {
    if (setIsAddingReview) {
      setIsAddingReview(false);
    }
    setEditMode(false);
  };

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
          <div className='c-img-user'>
            <img src={defaultUserIcon} alt='User Icon' />
          </div>
          <h2>{review.user?.username}</h2>
        </div>
        {isFromUser && (
          <>
            {!isNew && (
              <button className='btn-delete-review' onClick={handleDelete}>
                <img src={trashCanIcon} />
              </button>
            )}
            {editMode ? (
              <button className='btn-exit-edit-review' onClick={handleExitEditMode}>X</button>
            ) : (
              <button className='btn-edit-review' onClick={() => setEditMode(true)}>
                <img src={pencilIcon} alt='Edit icon' />
              </button>
            )}
          </>
        )}
      </div>
      {editMode ? (<>
        <div className='c-movie-review-rating'>
          <CustomRatingSelector rating={reviewFormData.rating} onChange={handleRatingChange} />
        </div>
        <div className='c-movie-review-text'>
          <textarea name='text' value={reviewFormData.text} onChange={handleChange} autoFocus rows={3} wrap='off' />
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
