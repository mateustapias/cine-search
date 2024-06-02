import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../types';
import '../styles/pages/MovieDetails.css';
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
            <div className='c-outer-movie-data'>
              <div className='c-movie-data'>
                <img id='foto' src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} />
                <img id='foto-blur' src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} />
                <div className='c-movie-data-details-a'>
                  <img
                    className='c-poster-img'
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                  />
                  <div className='c-movie-data-details'>
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
            <div className='c-outer-sla'>
              <div className='c-inner-sla'>
                <div className='c-movie-rating-a'>
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
