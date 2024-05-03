import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import '../styles/components/SearchBar.css';
import { Movie } from '../../types';
import searchIcon from '../assets/images/searchIcon.png';

const SearchBar = () => {
  const FORM_INITIAL_STATE = {
    searchValue: '',
  };

  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const { searchValue } = formData;
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value: targetValue } } = event;
    setFormData({ ...formData, [name]: targetValue });
    if (targetValue.trim() !== '') {
      try {
        const config = {
          method: 'GET',
          headers: {
            accept: 'application/json'
          },
          params: {
            api_key: '5e2aa1c348aa9fe8354f8e2c8a2f25eb',
            query: targetValue,
          }
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
    <div className='searchBarContainer'>
      <input
        id='searchBar'
        type="text"
        placeholder="Search..."
        name="searchValue"
        value={searchValue}
        onChange={handleChange}
      />
      <button id='searchButton'>
        <img
          id='searchIcon'
          src={searchIcon}
        />
      </button>

      {/* <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchBar;