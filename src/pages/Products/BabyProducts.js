import React from 'react';
import { useSelector } from 'react-redux';

const BabyProducts = () => {
    const allProduct = useSelector(state => state.products.allProducts);
    const babyProducts = allProduct.filter(baby => baby.category === 'baby');

    return (
        <div className='container'>
            <div className=' mx-auto px-4 lg:pb-1 sm:py-24 sm:px-6  lg:px-16'>

                {
                    babyProducts.map(product => <div key={product._id} className='mt-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-6'>


                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-900"> {product.name}  </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.descriptoin.slice(0, 90)}</p>
                            <p className="text-sm font-medium text-orange-500 mt-2">$ {product.price}</p>

                        </div>
                    </div>)
                }

                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default BabyProducts;