import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../Redux/slices/productSlice';


const GamingProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const gamingProducts = useSelector(state => state.products.gaming);
    console.log(gamingProducts);

    return (
        <div>
            <h2>{gamingProducts.length}</h2>
        </div>
    );
};

export default GamingProducts;