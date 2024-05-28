// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../types';
import '../styles/pages/MovieDetails.css';
import { requestData } from '../services/requests';

const MovieDetails = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState<Movie>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const config = {
  //         method: 'GET',
  //         headers: {
  //           accept: 'application/json',
  //         },
  //         params: {
  //           api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
  //           language: 'pt-BR',
  //           page: 1,
  //         },
  //       };
  //       const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, config);
  //       setMovieData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching movie data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await requestData(`/movies/${id}`);
      setMovieData(movieDetails);
    };

    fetchData();
  }, []);

  return (
    <div className='c-movie-details'>
      {movieData
        && <>
          <div className='c-outer-movie-data'>
            <div className='c-movie-data' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${movieData.backdrop_path}')` }}>
              <img className='c-poster-img' src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />
              <div className='c-movie-data-details'>
                <div className='c-movie-title'>
                  <span>{movieData.title}</span>
                </div>
                <div className='c-movie-rating'>
                  <span>
                    {`${movieData.vote_average.toFixed(1)} / 10`}
                  </span>
                </div>
              </div>
            </div>
            <div id='fade-effect' />
          </div>
          {/* <div className='c-movie-runtime'>
            {`${movieData.runtime} min`}
          </div> */}
          <div className='c-movie-release-date'>
            {movieData.release_date}
          </div>
          <div className='c-movie-overview'>
            {movieData.overview}
          </div>
        </>
      }
    </div>
  );
};

export default MovieDetails;
