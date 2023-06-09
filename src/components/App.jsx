import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
