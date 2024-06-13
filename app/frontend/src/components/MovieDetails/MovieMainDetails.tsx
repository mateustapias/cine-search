import { Movie } from '../../../types';
import '../../styles/components/MovieMainDetails.scss';

type MovieMainDetailsProps = {
  movieData: Movie;
};

const MovieMainDetails = ({ movieData }: MovieMainDetailsProps) => (
  <div className='c-outer-movie-main-details'>
    <div className='c-inner-movie-main-details'>
      <img id='img-backdrop' src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} />
      <img id='img-backdrop-blur-effect' src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} />
      <div className='c-movie-main-data-main-content'>
        <img
          id='img-poster'
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        />
        <div className='c-movie-data-title-and-tagline'>
          <div className='c-movie-title'>
            <span>{movieData.title}</span>
          </div>
          <div className='c-movie-tagline'>
            <span id='tagline'>{movieData.tagline}</span>
          </div>
        </div>
      </div>
    </div>
    <div id='fade-effect' />
  </div>
);

export default MovieMainDetails;
