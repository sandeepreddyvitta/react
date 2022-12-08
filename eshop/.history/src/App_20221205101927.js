import React from 'react'
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import CheckOut from './components/checkOut/CheckOut'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
