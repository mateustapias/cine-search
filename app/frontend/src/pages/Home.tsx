import PopularMovies from '../components/PopularMovies';
import TopRatedMovies from '../components/TopRatedMovies';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className='c-home'>
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
};

export default Home;