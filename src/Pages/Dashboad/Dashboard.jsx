import axios from 'axios';
import React from 'react';
import { get } from 'react-hook-form';

const Dashboard = () => {
    const handleThis =() => {
        axios.put('http://localhost:4000/product/yes')
    }
    return (
        <div>
            <h2 className='text-6xl text-center mt-10'>
            Welcome To Resell Game Console Market Dashboard
            </h2>
           <div className="btn btn-primary mx-auto btn-wide" 
           onClick={()=> handleThis()}>
        ok yes
           </div>
        </div>
    );
};

export default Dashboard;