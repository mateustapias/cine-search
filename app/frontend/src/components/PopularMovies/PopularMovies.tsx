import axios from 'axios';
import { useState, useEffect } from 'react';
import './PopularMovies.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Movie } from '../../../types';

const PopularMovies = () => {
  const [popularMoviesData, setPopularMoviesData] = useState<Movie[]>();

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
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', config);
        setPopularMoviesData(response.data.results);
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

  // Função para dividir o array {maxGroups} vezes de filmes em grupos de {chunkSize} 
  const chunkArray = (arr: Movie[], chunkSize: number, maxGroups: number): Movie[][] => {
    const chunkedArray = [];
    let groupsCount = 0;
    if (groupsCount <= maxGroups) {
      for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
        groupsCount += 1;
      }
    }
    return chunkedArray;
  };

  return (
    <div className='popularMoviesContainer'>
      <h1>Popular Movies</h1>
      {popularMoviesData ? (
        <Carousel wrap={false} interval={null}>
          {chunkArray(popularMoviesData, 5, 5).map((group, index) => (
            <Carousel.Item key={index}>
              <div className='movieGroup'>
                {group.map(movie => (
                  <div key={movie.id} className='movieCard'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title}</p>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularMovies;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import './PopularMovies.css';
// import MovieCarousel from './carrosel';

// const PopularMovies = () => {
//   const [popularMoviesData, setPopularMoviesData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const config = {
//           method: 'GET',
//           headers: {
//             accept: 'application/json'
//           },
//           params: {
//             api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
//             language: 'pt-BR'
//           }
//         };
//         const response = await axios.get('https://api.themoviedb.org/3/movie/popular', config);
//         setPopularMoviesData(response.data.results);
//       } catch (error) {
//         console.error('Error fetching movie data:', error);
//       }
//     };

//     fetchData();

//     // Cleanup function to cancel any pending requests (if needed)
//     return () => {
//       // Cancel any pending requests here if axios supports it
//     };
//   }, []);

//   return (
//     <div className='popularMoviesContainer'>
//       <h1>Popular Movies</h1>
//       {popularMoviesData ? (
//         <MovieCarousel movies={popularMoviesData} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PopularMovies;