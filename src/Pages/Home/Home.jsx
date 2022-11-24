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

const Home = () => {
    const url = `http://localhost:4000/advertise`;

    const { data: advertise = [] ,refetch ,isLoading } = useQuery({
        queryKey: ['advertise',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(advertise);
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
                <HomeCategory></HomeCategory>
                <Stats></Stats>
                </>
            }
            <Testimonail></Testimonail>
            <Clients></Clients>
            
          
        </div>
    );
};

export default Home;