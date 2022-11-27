import React from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
const Featured = ({advertise , refetch , isLoading }) => {

    return (
        <section className="py-10">
        <div className="container py-12 mx-auto space-y-24">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary">Advertised Products</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Our Best Products For you to Grab</p>
            </div>
            <Swiper
				slidesPerView={4}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper "
			>

        {
            advertise.map(product => <SwiperSlide key={product._id}>
                <div className="slide-item rounded-xl shadow-sm flex flex-col items-center justify-center p-8 space-y-4 bg-white min-h-96 mb-10">
                    
                    <figure>
                        <img src={product.img} alt={product.name}  className="rounded-xl h-48"/>
                    </figure>
                    <p className="px-6 py-2 text-lg font-semibold text-center sm:font-bold lg:max-w-2xl xl:max-w-4xl">
                        {product.name}
                    </p>
                    <Link to={`/product/single/${product._id}`}> 
                    <span className='btn btn-primary btn-wide text-white' >Details</span>
                    </Link>
                   
                </div>
            </SwiperSlide>)
        }
           				



			</Swiper>         
                </div>
    </section>
    );
};

export default Featured;