import React from 'react';
import { Link } from 'react-router-dom';
import { useLottie } from "lottie-react";
import notFound from '../../assets/404-error.json';
const NotFound = () => {
    const lottieAnimOptions = {
		animationData: notFound,
		loop: true,
	};

	const { View } = useLottie(lottieAnimOptions);
    return (
        <section className="flex flex-col items-center relative">
               {View}
	<div className=" px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md 2xl:absolute bottom-96 left-96 bg-secondary rounded-md">
 
		<p className="text-3xl py-10">Looks like our services are currently offline</p>
        <Link to={'/'}>
        <span className="px-8 py-3 font-semibold rounded bg-primary text-white">Back to homepage</span>
        </Link>
		
	</div>
</section>
    );
};

export default NotFound;