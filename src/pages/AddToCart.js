import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cart from './Cart';

const AddToCart = ({ cart }) => {
    const { productId } = useParams();

    const allProductState = useSelector(state => state.products.allProducts);
    const singleProduct = allProductState.find(product => product._id === productId)


    return (
        <div className=' mx-auto px-4 lg:pb-1 sm:py-24 sm:px-6  lg:px-16'>
            <div className='mt-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6'>

                <div className='mx-4'>
                    <img className="m-4" src={singleProduct?.image} alt="" />

                </div>
                <div className='col-span-2 mx-4 mt-6'>
                    <div>
                        <h1 className="text-2xl mb-3">{singleProduct?.name}</h1>
                        <h2 className="text-gray-400">{singleProduct?.descriptoin}</h2>
                        <p className="my-3 text-orange-600">BDT <span className="text-2xl ">{singleProduct?.price}</span></p>
                    </div>

                </div>

                <div className='mx-4'>
                    <Cart
                        singleProduct={singleProduct}
                        key={singleProduct?._id}
                    >

                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default AddToCart;