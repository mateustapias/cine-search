import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/components/MoviesCarousel.css';
import { Movie } from '../../types';

type MoviesCarouselProps = {
  moviesData: Movie[],
  chunkSize: number,
  maxGroups: number,
}

const MoviesCarousel = ({ moviesData, chunkSize = 4, maxGroups = 5 }: MoviesCarouselProps) => {
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
    <Carousel wrap={false} interval={null} className='moviesCarousel'>
      {chunkArray(moviesData, chunkSize, maxGroups).map((group, index) => (
        <Carousel.Item key={index}>
          <div className='movieGroup'>
            {group.map(movie => (
              <div key={movie.id} className='movieCard'>
                <img className='moviePoster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <span className='movieTitle'>{movie.title}</span>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MoviesCarousel;
