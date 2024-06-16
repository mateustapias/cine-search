import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { requestData } from '../services/requests';
import { Movie } from '../../types';
import '../styles/pages/MovieDetails.scss';
import MovieMainDetails from '../components/MovieDetails/MovieMainDetails';
import MovieSecondaryDetails from '../components/MovieDetails/MovieSecondaryDetails';
import MovieReviews from '../components/MovieDetails/MovieReviews';

const MovieDetails = () => {
  const { id } = useParams();
  // Colocar isso em um customHook
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
        {
          (movieData && (
            <>
              <MovieMainDetails movieData={movieData} />
              <MovieSecondaryDetails movieData={movieData} />
            </>
          )) || (
            <div style={{ flex: 1 }}>
              <Skeleton
                width={'100%'}
                height={'100%'}
              />
            </div>
          )
        }
        {/* {movieData && (
          <>
            <MovieMainDetails movieData={movieData} />
            <MovieSecondaryDetails movieData={movieData} />
          </>
        )} */}
      </div >
      {/* Não sei se é melhor passar o id como prop ou usar useParams no componente */}
      <MovieReviews id={Number(id)} />
    </>
  );
};

export default MovieDetails;
