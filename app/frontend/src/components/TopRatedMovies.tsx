import axios from 'axios';
import { useState, useEffect } from 'react';
import MoviesCarousel from './MoviesCarousel';
import { Movie } from '../../types';

// Diferente do PopularMovies
// Aqui faço requisição direto pra API externa, para comparação
// O objetivo é ficar igual ao PopularMovies
const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
          params: {
            api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
            language: 'pt-BR',
          },
        };

        const responsePage1 = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          ...config,
          params: {
            ...config.params,
            page: 1,
          },
        });

        const responsePage2 = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          ...config,
          params: {
            ...config.params,
            page: 2,
          },
        });

        const combinedResults = [...responsePage1.data.results, ...responsePage2.data.results];

        setTopRatedMovies(combinedResults);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='c-movies c-top-rated-movies'>
      <h1>Mais bem avaliados</h1>
      {topRatedMovies ? (
        <MoviesCarousel moviesData={topRatedMovies} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TopRatedMovies;
