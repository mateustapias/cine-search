import { Review } from '../../../types';
import { defaultUserIcon, pencilIcon } from '../../assets/icons';
import '../../styles/components/MovieReviewCard.scss';

type MovieReviewsProps = {
  review: Review;
  isFromUser: boolean;
};

const MovieReviewCard = ({ review, isFromUser }: MovieReviewsProps) => {
  const a = 'a';
  console.log(a);

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
          && <button className='c-btn-edit-review'>
            <img src={pencilIcon} />
          </button>
        }
      </div>
      <div className='c-movie-review-rating'>
        <h3>
          Nota: {review.rating}
        </h3>
      </div>
      <div className='c-movie-review-rating'>
        {review.text}
      </div>
    </div>
  );
};

export default MovieReviewCard;
