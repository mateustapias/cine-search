import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;