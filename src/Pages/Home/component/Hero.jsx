import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLottie } from "lottie-react";
import games from '../../../assets/games.json';
import { Link } from 'react-router-dom';

const Hero = () => {
  const lottieAnimOptions = {
		animationData: games,
		loop: true,
	};

	const { View } = useLottie(lottieAnimOptions);
    return (
      <section className="bg-secondary/10 py-20">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center pr-6 py-10 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-primary">Resell Market For
            <span className="text-accent"> Used Game</span> Console.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Find and buy unique products from thousands
            <br className="hidden md:inline lg:hidden" /> of trusted, independent brands.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to={"/register"}>
              <span className='btn-wide btn btn-primary text-white capitalize '> Sign Up For Start Selling</span>
            
            </Link>
        
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {View}
        </div>
      </div>
    </section>
   
    );
};

export default Hero;