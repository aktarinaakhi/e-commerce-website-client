import { faChevronRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../Redux/slices/productSlice';

const GamingProducts = ({ handleAddToCart }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const productState = useSelector(state => state.products.allProducts);
    const gamingState = productState.filter(gaming => gaming.category === 'Gaming accessories');

    return (
        <>

            <div>
                <div className="max-w-2xl mx-auto pt-16 px-4 lg:pb-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-1 lg:mt-40">
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Gaming accessories</h2>
                        <div className='text-blue-700'>
                            <Link to="/allGamingProducts">
                                <button className='bg-transparent mr-2 mb-4'>See more</button>
                            </Link>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <hr />
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-1">
                        {gamingState.slice(0, 5).map((product) => (
                            <div key={product._id} className="group relative hover:shadow-lg px-3 lg:h-4/5">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-1/2 lg:aspect-none">
                                    <img
                                        src={product.image}
                                        alt={product.image}
                                        className="w-full h-full object-center object-fill lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-900"> {product.name}  </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.descriptoin.slice(0, 90)}</p>
                                        <p className="text-sm font-medium text-orange-500 mt-2">$ {product.price}</p>

                                    </div>
                                </div>
                                <Link to={`/addToCart/${product._id}`}>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="bg-yellow-500 hover:bg-yellow-600  px-4 rounded shadow my-2 object-center">
                                        <FontAwesomeIcon className='mr-2' icon={faShoppingCart}></FontAwesomeIcon>
                                        Add to cart</button>
                                </Link>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>

    );
};

export default GamingProducts;