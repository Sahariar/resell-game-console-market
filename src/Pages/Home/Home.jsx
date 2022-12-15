import React from 'react';
import Loading from '../../component/Shared/Loading';
import BlogList from './component/BlogList';
import Clients from './component/Clients';
import Featured from './component/Featured';
import Hero from './component/Hero';
import HomeCategory from './component/HomeCategory';
import Stats from './component/Stats';
import Testimonail from './component/Testimonail';
import { useQuery } from '@tanstack/react-query';
import Discount from './component/Discount';
import FaqCom from './component/FaqCom';
import TopBrand from './component/TopBrand';
import BannerShop from './component/BannerShop';
import ImageFeed from './component/ImageFeed';

const Home = () => {
    const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/advertise`;

    const { data: advertise = [] ,refetch ,isLoading } = useQuery({
        queryKey: ['advertise',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <Hero></Hero>
            {
                advertise.length > 0 ? <> <Featured 
                advertise={advertise}
                refetch={refetch}
                isLoading={isLoading}      
                ></Featured>
                <Stats></Stats>
                <HomeCategory></HomeCategory>
                </>
                :
                <>
                <HomeCategory 
                ></HomeCategory>
                <Stats></Stats>
                </>
            }
            <Discount></Discount>
            <FaqCom></FaqCom>
            <TopBrand></TopBrand>
            <Clients></Clients>
            <BannerShop></BannerShop>
            <Testimonail></Testimonail>
           <ImageFeed></ImageFeed>
            
          
        </div>
    );
};

export default Home;