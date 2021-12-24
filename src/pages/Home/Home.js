import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className='md:container md:mx-auto'>

            <Banner></Banner>
            <Products></Products>

        </div>
    );
};

export default Home;