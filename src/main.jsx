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
import Error from "./components/Error/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: async () => await fetch("https://brandshop-server-three.vercel.app/brandNames"),
        element: <Home></Home>,
        // errorElement: <Error></Error>,
      },
      {
        path: "/addProducts",
        element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>,
        // errorElement: <Error></Error>,
      },
      {
        path: "/products/:brandName",
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`),
        // loader: ({params}) => console.log(params.brandName),
        element: <PrivateRoutes><BrandProducts></BrandProducts></PrivateRoutes>,
        // loader: ({params}) => fetch(`https://brandshop-server-three.vercel.app/products/${params}`)
        // errorElement: <Error></Error>,
      },
      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        // errorElement: <Error></Error>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
        // errorElement: <Error></Error>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        // errorElement: <Error></Error>,
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
