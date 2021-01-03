import React, { useState } from 'react';
import { HomeContainer } from './style';
import Hero from '../../components/Landing/Hero';
import Search from '../../components/Search';
import Why from '../../components/Landing/Why';
import RecentPost from '../../components/Landing/RecentPost';

const Home = () => {
    const [image, setImage] = useState('Dogs');

    return (
        <HomeContainer>
            <Hero image={image}>
                <h1>Our Name</h1>
                <h2> Is your Best place To find You Pet or To help Pet find new Family</h2>
                <Search setImage={setImage} />
            </Hero>
            <RecentPost />
            <Why />
        </HomeContainer>
    )
}


export default Home;