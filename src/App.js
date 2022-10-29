import './App.css';

import Favourite from './components/Favourite/Favourite';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/favourite' element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
