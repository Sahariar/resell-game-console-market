import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../component/Shared/Loading';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if( loading){
        return <> 
        <Loading></Loading>
        </>
    } 

    if( !user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return  children ;
};

export default PrivateRoutes;