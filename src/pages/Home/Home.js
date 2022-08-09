import React from 'react';
import Footer from '../../shared/Footer';
import Reviews from '../Review/Reviews';
import Banner from './Banner/Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <div className='md:container md:mx-auto' >
                <div id='home'>
                    <Banner></Banner>
                </div>           
                <Products></Products>
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;