import React from 'react';
import GamingProducts from '../Products/GamingProducts'

const Products = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div>
                <GamingProducts></GamingProducts>
            </div>
            <div>02</div>
            <div>03</div>
            <div>04</div>

        </div>
    );
};

export default Products;