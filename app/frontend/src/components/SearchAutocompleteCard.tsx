import { Movie } from '../../types';
import '../styles/components/SearchAutocompleteCard.css';

type SearchAutocompleteCardProps = {
  movie: Movie
}

const SearchAutocompleteCard = ({ movie }: SearchAutocompleteCardProps) => {
  return (
    <div className='searchAutocompleteCard'>
      <div className='autocompletePosterContainer'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className='autocompleteTitleContainer'>
        {movie.title}
      </div>
    </div>
  );
};

export default SearchAutocompleteCard;