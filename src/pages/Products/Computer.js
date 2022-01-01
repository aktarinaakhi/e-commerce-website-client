import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Computer = () => {
    const allProduct = useSelector(state => state.products.allProducts);
    const computersProducts = allProduct.filter(baby => baby.category === 'computer');
    return (
        <div className="max-w-2xl mx-auto pt-16 px-4 lg:pb-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-1">
            <div className='mb-2'>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Computer & accesories</h2>
            </div>
            <hr className='w-16 text-black text-2xl' />

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                {computersProducts.slice(0, 5).map((product) => (
                    <Link to={`/addToCart/${product._id}`}>
                        <div key={product._id} className="group relative hover:shadow-lg px-3 lg:h-4/5">
                            <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-1/2 lg:aspect-none">
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
                                    <p className="text-sm font-medium text-orange-500 mt-2">BDT {product.price}</p>

                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Computer;