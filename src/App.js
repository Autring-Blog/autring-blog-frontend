import HomePage from './components/Home/HomePage';
import Favourite from './components/favourite/Favourite';

import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Dashboard from './components/Dashboard/Dashboard';
import NewsCategory from './components/NewsCategory/NewsCategory';
import ProtectedRoute from './components/Auth/ProtectedRoute/ProtectedRoute';
function App() {
  const loggedIn = localStorage.getItem('loggedIn');
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/favourite' element={<Favourite />} />
          <Route exact path='/blog/:id' element={<NewsDetail />} />
          <Route exact path='/blogs/:category' element={<NewsCategory />} />
        </Route>
        <Route exact path='/dashboard' element={<Dashboard />} />)
      </Routes>
    </div>
  );
}

export default App;
