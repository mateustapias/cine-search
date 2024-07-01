import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { MoviesCarouselCard } from '.';
import { chunkArray } from '../../utils';
import { Movie } from '../../../types';
import '../../styles/components/MoviesCarousel.scss';

type MoviesCarouselProps = {
  moviesData: Movie[] | undefined,
  chunkSize: number,
  maxGroups: number,
};

const MoviesCarousel = ({ moviesData, chunkSize = 4, maxGroups = 5 }: MoviesCarouselProps) => {
  const isLoading = !moviesData || moviesData.length === 0;

  return (
    <Carousel wrap={false} interval={null} className='c-movies-carousel'>
      {chunkArray(chunkSize, maxGroups, isLoading ? (
        Array.from({ length: chunkSize * maxGroups })
      ) : (
        moviesData
      )).map((group, index) => (
        <Carousel.Item key={index}>
          <div className='c-movie-group'>
            {isLoading ? (
              group.map((_movie, movieIndex) => (
                <div key={movieIndex} className='c-movie-card'>
                  <Skeleton height={'100%'} />
                </div>
              ))
            ) : (
              group.map((movie, movieIndex) => (
                <MoviesCarouselCard key={movieIndex} movie={movie as Movie} />
              ))
            )}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MoviesCarousel;
