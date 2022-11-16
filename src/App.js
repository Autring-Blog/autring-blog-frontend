// import HomePage from "./components/Home/HomePage";
import HomePage from './components/Home/HomePage';
import Favourite from './components/Favourite/Favourite';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import NewsDetail from './components/NewsDetail/NewsDetail';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/favourite' element={<Favourite />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/blog/:id' element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
