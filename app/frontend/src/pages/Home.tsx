import PopularMovies from '../components/PopularMovies';
import TopRatedMovies from '../components/TopRatedMovies';
import '../styles/pages/Home.css';
// import Layout from './Layout';

const Home = () => {
  return (
    // <Layout>
    <div>
      <PopularMovies />
      <TopRatedMovies />
    </div>
    // </Layout>
  );
};

export default Home;