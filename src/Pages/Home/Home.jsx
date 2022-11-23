import React from 'react';
import Loading from '../../component/Shared/Loading';
import BlogList from './component/BlogList';
import Clients from './component/Clients';
import EmailSubs from './component/EmailSubs';
import Featured from './component/Featured';
import Hero from './component/Hero';
import Stats from './component/Stats';
import Testimonail from './component/Testimonail';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Featured></Featured>
            <Stats></Stats>
            <Clients></Clients>
        <BlogList></BlogList>
         <Testimonail></Testimonail>
        </div>
    );
};

export default Home;