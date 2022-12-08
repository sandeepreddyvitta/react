import React from 'react'
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import CheckOut from './components/checkOut/CheckOut'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'


function App() {
  const layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter[
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/checkout",
      element: <CheckOut />
    }
  ]
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
