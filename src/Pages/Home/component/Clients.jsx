import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
    return (
        <section className=" py-20">
        <div className="container  mx-auto space-y-24">
            <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <img src="https://i.ibb.co/5jwgBjJ/sellon.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                    <div className="lg:col-start-2 m-5 xl:mx-20">
                        <h3 className="text-3xl lg:text5xl font-bold tracking-tight sm:text-6xl">Sell on Resell Game Console Market</h3>
                        <p className="mt-3 text-lg ">Connect with vetted retailers across the United States, and start taking new wholesale orders.</p>
            <Link to={'/register'}>
            <button className='btn btn-primary my-10 btn-wide text-white'> Apply Now</button>
            </Link>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
    );
};

export default Clients;