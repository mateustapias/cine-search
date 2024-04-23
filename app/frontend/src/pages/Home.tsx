import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [movieData, setMovieData] = useState(null);

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
            language: 'pt-BR'
          }
        };
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', config);
        setMovieData(response.data.results);
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
    <div>
      {movieData ? (
        <div>
          <h1>Popular Movies</h1>
          <ul>
            {movieData.map(movie => (
              <li key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <br />
                <span>{movie.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;