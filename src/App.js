import './App.css';

import Favourite from './components/favourite/favourite/Favourite';

import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/news/News';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/favourite' element={<Favourite />}></Route>
        <Route path='/news' element={<News />}></Route>
      </Routes>
    </div>
  );
}

export default App;
