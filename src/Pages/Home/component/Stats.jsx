import React from 'react';

const Stats = () => {
    return (
        <section className="p-6 bg-neutral text-white py-20">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">250+</p>
                <p className="text-sm sm:text-base">Happy Sellers</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">580+</p>
                <p className="text-sm sm:text-base">Happy Buyers</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">1500+</p>
                <p className="text-sm sm:text-base">Sold Items</p>
            </div>
        </div>
    </section>
    );
};

export default Stats;