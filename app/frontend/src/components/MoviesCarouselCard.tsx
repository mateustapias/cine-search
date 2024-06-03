import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import starICon from '../assets/images/starIcon.png';
import '../styles/components/MoviesCarouselCard.scss';

type MoviesCarouselCardProps = {
  movie: Movie;
};

const MoviesCarouselCard = ({ movie }: MoviesCarouselCardProps) => (
  <Link to={`/${movie.id}`} className='c-movie-card'>
  {/* <Link to={`/${movie.id}`} className='movie-card'> */}
    <div className='c-movie-poster'>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
    <div className='c-movie-card-details'>
      <div className='c-movie-rating'>
        <div className='c-icon-star'>
          <img className='icon-star' src={starICon} />
        </div>
        <span className='movie-rating'>{`${movie.vote_average.toFixed(1)}`}</span>
      </div>
      <div className='c-movie-title'>
        <span className='movie-title'>{movie.title}</span>
      </div>
    </div>
  </Link>
);

export default MoviesCarouselCard;
