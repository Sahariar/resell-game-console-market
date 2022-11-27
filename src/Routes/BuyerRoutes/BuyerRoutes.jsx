import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../component/Shared/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../hook/useBuyer';

const BuyerRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const [isBuyer , isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();
    if( loading || isBuyerLoading){
        return <> <Loading></Loading></>
    } 

    if( user && isBuyer){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return  children ;
   
};

export default BuyerRoutes;