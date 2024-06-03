import { Route, Routes } from 'react-router-dom';
import { Layout, Home, MovieDetails } from './pages';
import AppProvider from './context/AppProvider';
import './App.css';

const App = () => (
  <AppProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  </AppProvider>
);

export default App;
