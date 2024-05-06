import PopularMovies from '../components/PopularMovies';
import TopRatedMovies from '../components/TopRatedMovies';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className='homeContainer'>
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
};

export default Home;