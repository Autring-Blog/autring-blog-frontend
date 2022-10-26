import './App.css';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signup />}>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
