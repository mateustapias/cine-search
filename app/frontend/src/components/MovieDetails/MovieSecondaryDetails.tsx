import { Movie } from '../../../types';
import { calendarIcon, clockIcon, starIcon } from '../../assets/icons';
import '../../styles/components/MovieDetails/MovieSecondaryDetails.scss';

type MovieSecondaryDetailsProps = {
  movieData: Movie;
};

const MovieSecondaryDetails = ({ movieData }: MovieSecondaryDetailsProps) => (
  <div className='c-outer-secondary-details'>
    <div className='c-inner-secondary-details'>
      <div className='c-movie-rating'>
        <img className='icon-star' src={starIcon} />
        <span>{`${movieData.vote_average} / 10`}</span>
      </div>
      <div className='c-movie-runtime'>
        <img className='icon-clock' src={clockIcon} />
        <span>{`${movieData.runtime} min`}</span>
      </div>
      <div className='c-movie-release-date'>
        <img className='icon-clock' src={calendarIcon} />
        <span>{movieData.release_date}</span>
      </div>
      <div className='c-movie-overview'>
        <p>{movieData.overview}</p>
      </div>
    </div>
  </div>
);

export default MovieSecondaryDetails;
