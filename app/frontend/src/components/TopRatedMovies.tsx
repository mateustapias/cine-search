import axios from 'axios';
import { useState, useEffect } from 'react';
import MoviesCarousel from './MoviesCarousel';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState();

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
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', config);
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();

    // Cleanup function to cancel any pending requests (if needed)
    return () => {
      // Cancel any pending requests here if axios supports it
    };
  }, []);

  return (
    <div className='moviesContainer topRatedMoviesContainer'>
      <h1>Mais bem avaliados</h1>
      { topRatedMovies ? (
        <MoviesCarousel moviesData={topRatedMovies} chunkSize={5} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TopRatedMovies;