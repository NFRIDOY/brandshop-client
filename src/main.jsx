import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/Home/Home.jsx";
import AddProducts from "./components/AddProducts/AddProducts.jsx";
import MyCart from "./components/MyCart/MyCart.jsx";
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registration/Registration.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>,

      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,

      },
      {
        path: "/registration",
        element: <Registration></Registration>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
