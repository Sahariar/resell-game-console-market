import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer';
import Header from '../component/Shared/Header';
import { ToastContainer} from 'react-toastify';

const Root = () => {
    return (
        <>
          <Header></Header>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
          <Outlet></Outlet>
          <Footer></Footer>  
        </>
    );
};

export default Root;