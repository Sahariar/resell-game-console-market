import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../component/Shared/Loading";
import AdminAreaLayout from "../Layout/AdminAreaLayout";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Allbuyers from "../Pages/Dashboad/Allbuyers";
import AllSeller from "../Pages/Dashboad/AllSeller";
import Dashboard from "../Pages/Dashboad/Dashboard";
import Orders from "../Pages/Dashboad/Orders";
import Payment from "../Pages/Dashboad/Payment";
import PaymentHistory from "../Pages/Dashboad/PaymentHistory";
import ReportsItem from "../Pages/Dashboad/ReportsItem";
import WishList from "../Pages/Dashboad/WishList";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import NotFound from "../Pages/NotFound/NotFound";
import AddProduct from "../Pages/Prodcuts/AddProduct";
import Category from "../Pages/Prodcuts/Category/Category";
import ManageProduct from "../Pages/Prodcuts/ManageProduct";
import SingleProduct from "../Pages/Prodcuts/SingleProduct";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import BuyerRoutes from "./BuyerRoutes/BuyerRoutes";
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
                path:"/loading",
                element:<Loading />
            },
            {
                path:"/product/category/:id",
                loader: async({params}) => fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/products/category/${params.id}`),
                element:<PrivateRoutes><Category></Category> </PrivateRoutes> 
            },
            {
                path:"/product/single/:id",
                loader: async({params}) => fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/products/single?id=${params.id}`),
                element:<PrivateRoutes><SingleProduct></SingleProduct> </PrivateRoutes> 
            },


        ]
    },{
        path:'/dashboard',
        element:<AdminAreaLayout></AdminAreaLayout>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/dashboard",
                element:<PrivateRoutes><Dashboard /></PrivateRoutes>
            },
            {
                path:"/dashboard/orders",
                element:<PrivateRoutes><Orders /></PrivateRoutes>
            },
            {
                path:"/dashboard/reportsitem",
                element:<AdminRoutes><ReportsItem /></AdminRoutes>
            },
            {
                path:"/dashboard/allsellers",
                element:<AdminRoutes><AllSeller /></AdminRoutes>
            },
            {
                path:"/dashboard/allbuyers",
                element:<AdminRoutes><Allbuyers /></AdminRoutes>
            },
            {
                path:"/dashboard/addproduct",
                element:<BuyerRoutes><AddProduct /></BuyerRoutes>
            },
            {
                path:"/dashboard/myproduct",
                element:<PrivateRoutes><ManageProduct /></PrivateRoutes>
            },
            {
                path:"/dashboard/payment/:id",
                loader: ({params}) => fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/bookings/${params.id}`),
                element:<PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            {
                path:"/dashboard/paymenthistory",
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:"/dashboard/wishList",
                element:<WishList></WishList>
            },
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])

