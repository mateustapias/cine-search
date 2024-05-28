import MoviesCarousel from './MoviesCarousel';
import useMovies from '../hooks/useMovies';

// Diferente de TopRatedMovies
// Aqui faço a requisição para o meu prórpio banco
const PopularMovies = () => {
  const { moviesData } = useMovies('popular');

  return (
    <div className='c-movies c-popular-movies'>
      <h1>Populares</h1>
      {moviesData ? (
        <MoviesCarousel moviesData={moviesData} chunkSize={6} maxGroups={5} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularMovies;
