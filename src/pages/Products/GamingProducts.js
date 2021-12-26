import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../Redux/slices/productSlice';

const GamingProducts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const productState = useSelector(state => state.products.gaming);

    const gamingState = productState.filter(gaming => gaming.category === 'Gaming accessories')
    console.log(gamingState);



    return (

        <div className="bg-white top-0">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Gaming accessories</h2>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-2'>See more</button>

                </div>
                <hr />

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4">
                    {gamingState.slice(0, 5).map((product) => (
                        <div key={product._id} className="group relative hover:shadow-lg px-3 lg:h-4/5">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-1/2 lg:aspect-none">
                                <img
                                    src={product.image}
                                    alt={product.image}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-900"> {product.name}  </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.descriptoin}</p>
                                    <p className="text-sm font-medium text-orange-500 mt-2">$ {product.price}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default GamingProducts;