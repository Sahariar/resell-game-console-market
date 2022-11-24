import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Category from "../Pages/Prodcuts/Category/Category";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const route = createBrowserRouter([
    { 
        path:'/',
        loader: async() => fetch(`http://localhost:4000/products/category`),
        element: <Root></Root>,
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
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])

