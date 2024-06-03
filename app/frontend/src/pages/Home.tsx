import { PopularMovies, TopRatedMovies } from '../components/Carousel';
import '../styles/pages/Home.scss';

const Home = () => (
  <div className='c-home'>
    <PopularMovies />
    <TopRatedMovies />
  </div>
);

export default Home;
