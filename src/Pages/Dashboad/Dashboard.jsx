import axios from 'axios';
import React from 'react';
import { get } from 'react-hook-form';
import { ImDrawer } from "react-icons/im";
const Dashboard = () => {
    return (
        <div>
            <h2 className='text-6xl text-center mt-10'>
            Welcome To Resell Game Console Market Dashboard
            </h2>
            <label htmlFor="user-dash-drawer" className="btn btn-ghost">
								<ImDrawer className="text-4xl text-primary"/>	
                                Open Dashboard		  
			</label>
        </div>
    );
};

export default Dashboard;