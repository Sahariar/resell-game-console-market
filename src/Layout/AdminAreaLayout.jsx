import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../component/Shared/Footer';
import Header from '../component/Shared/Header';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';

const AdminAreaLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    console.log(isSeller ,user?.email);
    return (
        <>
        <Header></Header>
        <div className="drawer drawer-mobile">
  <input id="user-dash-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  bg-secondary/10 rounded-xl">
  
  <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
  <label htmlFor="user-dash-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 text-base-content bg-info lg:bg-accent/20 rounded-xl">
      <li><NavLink to={'/dashboard/orders'}> My orders</NavLink></li>
      <li><NavLink to={'/dashboard/wishList'}> My WishList</NavLink></li>
      <li><NavLink to={'/dashboard/paymentHistory'}> Payment History</NavLink></li>
      {
      isAdmin && <>
       <li><NavLink to={'/dashboard/reportsitem'}> Reports Item</NavLink></li>
       <li><NavLink to={'/dashboard/allsellers'}> All Seller </NavLink></li>
       <li><NavLink to={'/dashboard/allbuyers'}> All Buyer </NavLink></li>
       <li><NavLink to={'/dashboard/addproduct'}> Add Product</NavLink></li>
       <li><NavLink to={'/dashboard/myproduct'}>My Product</NavLink></li>
      
       </>
      }
        {
      isSeller && <>
        <li><NavLink to={'/dashboard/addproduct'}> Add Product</NavLink></li>
       <li><NavLink to={'/dashboard/myproduct'}>My Product</NavLink></li>
       </>
      }
      
    </ul>
  
  </div>
</div>
        <ToastContainer/>
        
        <Footer></Footer>  
        </>
    );
};

export default AdminAreaLayout;