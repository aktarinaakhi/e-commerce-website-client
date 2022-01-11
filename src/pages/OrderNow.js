import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Cart from './Cart';

const OrderNow = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [orders, setOrders] = useState([]);

    const allProductState = useSelector(state => state.products.allProducts);
    const singleProduct = allProductState.find(product => product._id === productId)

    const onSubmit = data => {
        const serviceData = {
            ...data,
            status: 'pending'
        };
        const url = 'https://nameless-sands-15890.herokuapp.com/orders';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                if (res) {
                    setOrders([]);
                    alert('Order Successfully');
                    reset();
                }
            })
    }
    return (
        <div className='max-w-2xl mx-auto pt-16 px-4 lg:pb-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-1'>
            <h2 className='text-xl '>Delivary information</h2>
            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10'>
                <div className='col-span-2'>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <input className='w-full my-6 border p-1' defaultValue={user?.displayName} {...register("name", { required: true })} />
                                {errors.name && <span>Address is required </span>}

                                <input className='w-full my-2 border p-1' placeholder="email" defaultValue={user?.email} {...register("email", { required: true })} />
                                {errors.email && <span>Address is required </span>}

                                <select className='w-full my-6 border p-1' {...register("region", { required: true })}>
                                    <option value="female">Dhaka</option>
                                    <option value="male">Rajshahi</option>
                                    <option value="other">Barishal</option>
                                    <option value="other">Rangpur</option>
                                    <option value="other">chittagong</option>
                                    <option value="other">Khulna</option>
                                    <option value="other">Mymensingh</option>
                                    <option value="other">Sylhet</option>
                                </select>
                                {errors.region && <span>Address is required </span>}

                            </div>

                            <div>
                                <input className='w-full my-6 border p-1' defaultValue={singleProduct?.name} {...register("ProductName", { required: true })} />
                                {errors.ProductName && <span>Address is required </span>}

                                <input className='w-full my-6 border p-1' defaultValue={singleProduct?.image} {...register("ProductImage", { required: true })} />
                                {errors.ProductImage && <span>Address is required </span>}

                                <input className='w-full my-6 border p-1' defaultValue={singleProduct?.descriptoin} {...register("ProductDiscription", { required: true })} />
                                {errors.ProductDiscription && <span>Address is required </span>}



                                <input className='w-full my-6 border p-1' defaultValue={singleProduct?.price} {...register("ProductPrice", { required: true })} />
                                {errors.ProductPrice && <span>Address is required </span>}

                                <input className='w-full my-2 border p-1' placeholder="Address" defaultValue="" {...register("Address", { required: true })} />
                                {errors.Address && <span>Address is required </span>}

                                <input className='w-full my-6 border p-1' placeholder="phone number" defaultValue="" {...register("Phone", { required: true })} required />

                                <input className='p-2 border bg-orange-500 rounded' value="Confirm Order" type="submit"></input>

                            </div>

                        </div>
                    </form>

                </div>

                <div>
                    <Cart singleProduct={singleProduct}
                        key={singleProduct?._id}>

                    </Cart>

                </div>

            </div>

        </div>
    );
};

export default OrderNow;