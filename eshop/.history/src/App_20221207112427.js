import React, { Children } from 'react'
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import CheckOut from './components/checkOut/CheckOut'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Login from './components/login/Login';


function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <>
          <Outlet />
        </>
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
        },
        {
          path: '/login',
          element: <Login />
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
