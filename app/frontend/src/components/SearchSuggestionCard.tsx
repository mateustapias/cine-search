import { Movie } from '../../types';
// import { useNavigate } from 'react-router-dom';
import '../styles/components/SearchSuggestionCard.css';

type SearchSuggestionCardProps = {
  movie: Movie
}

const SearchSuggestionCard = ({ movie }: SearchSuggestionCardProps) => {
  return (
    <div className='searchSuggestionCard' >
      <div className='searchSuggestionPosterContainer'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className='searchSuggestionTitleContainer'>
        {movie.title}
      </div>
    </div>
  );
};

export default SearchSuggestionCard;