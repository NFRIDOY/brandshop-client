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
import PrivateRoutes from "./components/Provider/PrivateRoutes.jsx";
import BrandProducts from "./components/BrandProducts/BrandProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => fetch("https://brandshop-server-three.vercel.app/brandNames"),
        element: <Home></Home>,

      },
      {
        path: "/addProducts",
        element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>,

      },
      {
        path: "/products/:brandName",
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`),
        // loader: ({params}) => console.log(params.brandName),
        element: <PrivateRoutes><BrandProducts></BrandProducts></PrivateRoutes>,
        // loader: ({params}) => fetch(`https://brandshop-server-three.vercel.app/products/${params}`)

      },
      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,

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
