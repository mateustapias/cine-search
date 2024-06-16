import { SkeletonTheme } from 'react-loading-skeleton';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home, MovieDetails } from './pages';
import AppProvider from './context/AppProvider';
import './App.scss';

const App = () => (
  <AppProvider>
    {/* <SkeletonTheme baseColor='#ff0303' highlightColor='#444'> */}
    <SkeletonTheme baseColor='#202020' highlightColor='#444' height={300}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </SkeletonTheme>
  </AppProvider>
);

export default App;
