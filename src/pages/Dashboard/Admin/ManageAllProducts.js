import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';

const ManageAllProducts = () => {

    const [products, setProducts] = useState([]);
    // const [spinner, setSpinner] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    useEffect(() => {
        fetch('https://nameless-sands-15890.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // setSpinner(false)
            });
    }, []);
    const modalShow = (id) => {
        setShow(true);
    }
    const handleDelete = id => {
        const url = `https://nameless-sands-15890.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    setShow(false)
                }

            })
    }
    return (
        <Dashboard>
            <div className='text-center my-4 shadow-lg mx-10'>
                <h2 className='mt-5 text-center text-2xl mb-10'>Manage all products</h2>

                {/* {
                    spinner && <h2 className="mx-auto" animation="border" variant="dark" />
                } */}
                {products.map(product => <div className="flex justify-start mt-10 shadow-lg">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white ">
                        <div>
                            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product.image} alt="" />
                        </div>

                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                            <p className="text-gray-600 text-xs">{product.descriptoin}</p>
                            <p className='text-orange-500 mt-4'>BDT {product.price}</p>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <button onClick={() => modalShow(product._id)} className="text-white ml-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                            Delete products
                        </button>
                    </div>

                </div>

                )}

            </div>
        </Dashboard>
    );
};

export default ManageAllProducts;