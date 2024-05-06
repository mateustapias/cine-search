import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../types';
import '../styles/pages/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'GET',
          headers: {
            accept: 'application/json'
          },
          params: {
            api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
            language: 'pt-BR',
            page: 1
          }
        };
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, config);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  });

  return (
    <div className='movieDetailsContainer'>
      {movieData &&
        <div className='movieDataContainer'>
          <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />
          <div className='movieDataDetailsContainer'>
            <div className='movieTitleContainer'>
              {movieData.title}
            </div>
            <div className='movieRatingContainer'>
              <span>
                {`${movieData.vote_average.toFixed(1)} / 10`}
              </span>
            </div>
            <div className='movieRuntimeContainer'>
              {`${movieData.runtime} min`}
            </div>
            <div className='movieReleaseDateContainer'>
              {movieData.release_date}
            </div>
            <div className='movieOverviewContainer'>
              {movieData.overview}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MovieDetails;