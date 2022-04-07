import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../Dashboard';

const AddProducts = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://nameless-sands-15890.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId && res.config.data) {
                    alert('product added Successfully');
                    reset();
                    console.log(res);
                }
            })
    }

    return (
        <Dashboard>
            <div className='text-center my-4 shadow-lg mx-10'>
                <h3 className='mt-5 text-center text-2xl mb-10'>Add New Products</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-sm text-center mx-auto'>


                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Category
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input name="category" placeholder="category" {...register("category")} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />

                        </div>
                    </div>

                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Product name
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input name="name" placeholder="product name" {...register("name")} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />

                        </div>
                    </div>

                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Description
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input name="descriptoin" placeholder="descriptoin" {...register("descriptoin")} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                        </div>
                    </div>

                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Price
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input name="price" placeholder="price" {...register("price")} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />

                        </div>
                    </div>


                    <div className='md:flex md:items-center mb-6'>
                        <div className='md:w-1/3'>
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Image
                            </label>
                        </div>
                        <div className='md:w-2/3'>
                            <input name="image" placeholder="image" {...register("image")} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" /> <br />
                        </div>
                    </div>


                    <div className='md:w-3/4 mx-auto'>
                        <input className="bg-blue-500 hover:bg-blue-400 w-full text-white py-2 px-4 my-10 border rounded" type="submit" />
                    </div>
                </form>
            </div>
        </Dashboard>
    );
};

export default AddProducts;