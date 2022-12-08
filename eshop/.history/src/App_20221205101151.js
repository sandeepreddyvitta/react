import React from 'react'
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import CheckOut from './components/checkOut/CheckOut'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
