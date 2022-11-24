import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminAreaLayout from "../Layout/AdminAreaLayout";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Allbuyers from "../Pages/Dashboad/Allbuyers";
import AllSeller from "../Pages/Dashboad/AllSeller";
import Dashboard from "../Pages/Dashboad/Dashboard";
import Orders from "../Pages/Dashboad/Orders";
import Payment from "../Pages/Dashboad/Payment";
import ReportsItem from "../Pages/Dashboad/ReportsItem";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import NotFound from "../Pages/NotFound/NotFound";
import AddProduct from "../Pages/Prodcuts/AddProduct";
import Category from "../Pages/Prodcuts/Category/Category";
import ManageProduct from "../Pages/Prodcuts/ManageProduct";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const route = createBrowserRouter([
    { 
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:"/home",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/blog",
                element:<Blog />
            },
            {
                path:"/product/category/:id",
                loader: async({params}) => fetch(`http://localhost:4000/products/category/${params.id}`),
                element:<PrivateRoutes><Category></Category> </PrivateRoutes> 
            },

        ]
    },{
        path:'/dashboard',
        element:<AdminAreaLayout></AdminAreaLayout>,
        children:[
            {
                path:"/dashboard/orders",
                element:<Orders />
            },
            {
                path:"/dashboard/reportsitem",
                element:<ReportsItem />
            },
            {
                path:"/dashboard/allsellers",
                element:<AllSeller />
            },
            {
                path:"/dashboard/allbuyers",
                element:<Allbuyers />
            },
            {
                path:"/dashboard/addproduct",
                element:<AddProduct />
            },
            {
                path:"/dashboard/myproduct",
                element:<ManageProduct />
            },
            {
                path:"/dashboard/payment/:id",
                loader: ({params}) => fetch(`http://localhost:4000/bookings/${params.id}`),
                element:<Payment></Payment>
            },
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])

