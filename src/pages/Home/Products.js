import React from 'react';
import GamingProducts from '../Products/GamingProducts'
import HomeAndKitchenProducts from '../Products/HomeAndKitchenProducts';

const Products = () => {
    return (
        <>
            <div>
                <GamingProducts></GamingProducts>
            </div>

            <div>
                <HomeAndKitchenProducts></HomeAndKitchenProducts>
            </div>
        </>




    );
};

export default Products;