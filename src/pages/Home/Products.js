import React from 'react';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakeDb';
import CombineFourProducts from '../Products/CombineFourProducts';
import FemaleProducts from '../Products/FemaleProducts';
import GamingProducts from '../Products/GamingProducts'
import GiftProducts from '../Products/GiftProducts';
import HomeAndKitchenProducts from '../Products/HomeAndKitchenProducts';
import MaleFashion from '../Products/MaleFashion';


const Products = () => {
    const [cart, setCart] = useCart();

    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //update local storage
        addToDb(product.key);
    }
    return (
        <>
        
            <CombineFourProducts handleAddToCart={handleAddToCart}></CombineFourProducts>
            <GamingProducts handleAddToCart={handleAddToCart} cart={cart}></GamingProducts>
            <HomeAndKitchenProducts handleAddToCart={handleAddToCart} ></HomeAndKitchenProducts>
            <GiftProducts handleAddToCart={handleAddToCart}></GiftProducts>
            <FemaleProducts handleAddToCart={handleAddToCart}></FemaleProducts>
            <MaleFashion handleAddToCart={handleAddToCart}></MaleFashion>
        </>
    );
};

export default Products;