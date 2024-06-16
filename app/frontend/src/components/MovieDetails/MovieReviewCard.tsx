import { Review } from '../../../types';
import { defaultUserIcon } from '../../assets/icons';
import '../../styles/components/MovieReviewCard.scss';

type MovieReviewsProps = {
  review: Review;
};

const MovieReviewCard = ({ review }: MovieReviewsProps) => (
  <div className='c-movie-review-card'>
    <div className='c-movie-review-author'>
      <img src={defaultUserIcon} />
      <h2>
        {review.user?.username}
      </h2>
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

export default MovieReviewCard;
