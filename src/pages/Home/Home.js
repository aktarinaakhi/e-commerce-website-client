import React from 'react';
import Reviews from '../Review/Reviews';
import Banner from './Banner/Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className='md:container md:mx-auto'>

            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;