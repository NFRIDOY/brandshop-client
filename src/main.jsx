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
import DataNotFound from "./components/Error/DataNotFound.jsx";
import ProductUpdate from "./components/ProductUpdate/ProductUpdate.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import { Toaster } from "react-hot-toast";
import DarkModeToggle from "react-dark-mode-toggle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        // loader: () => fetch("https://brandshop-server-three.vercel.app/brandNames"),
        // loader: () => fetch("https://brandshop-server-three.vercel.app"),
        // loader: () => fetch("https://brandshop-server-three.vercel.app/brandNames"),
        loader: () => fetch("https://brandshop-server-three.vercel.app/brandNames"),
        element: <Home></Home>,
        errorElement: <Error></Error>,
      },
      {
        path: "/addProducts",
        element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>,
        errorElement: <Error></Error>,
      },
      {
        path: "/products/:brandName",
        // loader: ({ params }) => fetch(`https://brandshop-server-three.vercel.app/products/${params.brandName}`),
        loader: ({ params }) => fetch(`https://brandshop-server-three.vercel.app/products/${params.brandName}`),
        element: <PrivateRoutes><BrandProducts></BrandProducts></PrivateRoutes>,
        errorElement: <DataNotFound></DataNotFound>,
      },
      {
        path: "/detailsProducts/:detailsProductId",
        loader: ({ params }) => fetch(`https://brandshop-server-three.vercel.app/updateProducts/${params.detailsProductId}`),
        // loader: ({ params }) => console.log(params.updateId),
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        // errorElement: <DataNotFound></DataNotFound>,
      },
      {
        path: "/updateProducts/:updateId",
        loader: ({ params }) => fetch(`https://brandshop-server-three.vercel.app/updateProducts/${params.updateId}`),
        // loader: ({ params }) => console.log(params.updateId),
        element: <PrivateRoutes><ProductUpdate></ProductUpdate></PrivateRoutes>,
        // errorElement: <DataNotFound></DataNotFound>,
      },
      {
        path: "/myCart",
        loader: () => fetch("https://brandshop-server-three.vercel.app/myCart"),
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        errorElement: <Error></Error>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
        errorElement: <Error></Error>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <Error></Error>,
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    {/* <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
