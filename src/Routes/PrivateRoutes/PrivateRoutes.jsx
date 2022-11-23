import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if( loading){
        return <> <h1 className='text6xl'> 
            This is a Loading area.
        </h1></>
    } 

    if( !user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return  children ;
};

export default PrivateRoutes;