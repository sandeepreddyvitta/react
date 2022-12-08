import React, { Children } from 'react'
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import CheckOut from './components/checkOut/CheckOut'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'


function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/checkout",
          element: <CheckOut />
        }
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
