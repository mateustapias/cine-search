import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { searchIcon } from '../../assets/icons';
import { Movie } from '../../../types';
import SearchSuggestion from './SearchSuggestion';
import '../../styles/components/Header/SearchBar.scss';

const SearchBar = () => {
  const FORM_INITIAL_STATE = {
    searchValue: '',
  };

  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const { searchValue } = formData;
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;

    setFormData({ ...formData, [name]: targetValue });

    if (targetValue.trim() !== '') {
      try {
        const config = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
          params: {
            api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
            query: targetValue,
            language: 'pt-BR',
          },
        };
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', config);

        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div
      className='c-search'
      onFocus={() => setShowSuggestions(true)}
      onBlur={(event) => (event.relatedTarget ? null : setShowSuggestions(false))}
    >
      <div className={`c-search-bar${searchResults.length && showSuggestions ? ' with-suggestion' : ''}`}>
        <input
          id='input-search-bar'
          type="text"
          placeholder="Pesquisar..."
          name="searchValue"
          value={searchValue}
          onChange={handleChange}
        />
        <button id='btn-search'>
          <img id='search-icon' src={searchIcon} />
        </button>
      </div>
      {showSuggestions && (
        <SearchSuggestion movies={searchResults} />
      )}
    </div>
  );
};

export default SearchBar;
