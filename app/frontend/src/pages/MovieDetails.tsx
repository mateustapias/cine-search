import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../types';
import '../styles/pages/MovieDetails.scss';
import { requestData } from '../services/requests';
import starIcon from '../assets/images/starIcon.png';
import clockIcon from '../assets/images/clockIcon.png';
import calendarIcon from '../assets/images/calendarIcon.png';
// TODO: adicionar um index nas images para barrel

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await requestData(`/movies/${id}`);

      setMovieData(movieDetails);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className='c-movie-details-a'>
        {movieData && (
          <>
            <div className='c-outer-movie-main-data'>
              <div className='c-inner-movie-main-data'>
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
            <div className='c-outer-secondary-data'>
              <div className='c-inner-secondary-data'>
                <div className='c-movie-rating'>
                  <img className='icon-star' src={starIcon} />
                  <span>{`${movieData.vote_average} / 10`}</span>
                </div>
                <div className='c-movie-runtime'>
                  <img className='icon-clock' src={clockIcon} />
                  <span>
                    {`${movieData.runtime} min`}
                  </span>
                </div>
                <div className='c-movie-release-date'>
                  <img className='icon-clock' src={calendarIcon} />
                  <span>
                    {movieData.release_date}
                  </span>
                </div>
                <div className='c-movie-overview'>
                  <span>
                    {movieData.overview}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div >
    </>
  );
};

export default MovieDetails;
