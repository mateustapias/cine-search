import { useState, useEffect } from 'react';
import { Movie } from '../../types';
import MoviesCarousel from './MoviesCarousel';
import { requestMovies } from '../services/requests';

// Diferente de TopRatedMovies
// Aqui faço a requisição para o meu prórpio banco
const PopularMovies = () => {
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await requestMovies('/movies/many');

        setPopularMoviesData(movies);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='c-movies c-popular-movies'>
      <h1>Populares</h1>
      {popularMoviesData ? (
        <MoviesCarousel moviesData={popularMoviesData} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularMovies;
