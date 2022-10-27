import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin />}>
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
