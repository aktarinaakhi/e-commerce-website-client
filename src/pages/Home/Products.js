import React from 'react';
import CombineFourProducts from '../Products/CombineFourProducts';
import FemaleProducts from '../Products/FemaleProducts';
import GamingProducts from '../Products/GamingProducts'
import GiftProducts from '../Products/GiftProducts';
import HomeAndKitchenProducts from '../Products/HomeAndKitchenProducts';
import MaleFashion from '../Products/MaleFashion';


const Products = () => {
    return (
        <>
            <CombineFourProducts></CombineFourProducts>
            <GamingProducts></GamingProducts>
            <HomeAndKitchenProducts></HomeAndKitchenProducts>
            <GiftProducts></GiftProducts>
            <FemaleProducts></FemaleProducts>
            <MaleFashion></MaleFashion>

        </>
    );
};

export default Products;