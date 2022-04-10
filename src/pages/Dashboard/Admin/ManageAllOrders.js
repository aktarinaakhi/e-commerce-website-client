import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';


const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [status, setStatus] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    useEffect(() => {
        fetch('https://nameless-sands-15890.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [status]);

    const modalShow = id => {
        setShow(true);
    }
    const handleDelete = id => {
        const url = `https://nameless-sands-15890.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = allOrders.filter(order => order._id !== id);
                    setAllOrders(remaining);
                    setShow(false)
                }

            })
    }

    const handleUpdateStatus = id => {
        const update = {
            status: 'Shipped'
        }
        const url = `https://nameless-sands-15890.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setStatus(data);
                    alert('Status updated successfully');

                }
            })
    }
    return (
        <Dashboard>
            <div className='text-center my-4 shadow-lg mx-10'>
                <h2 className='mt-5 text-center text-2xl mb-10'>Manage all orders</h2>

                {allOrders.map(product => <div className="flex justify-start mt-10 shadow-lg">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white ">
                        <div>
                            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product.ProductImage} alt="" />
                        </div>

                        <div className="p-6 flex flex-col justify-start ml-5">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                            <p className="text-gray-600 text-xs">{product.email}</p>
                            <p className='my-2'>Price: {product.ProductPrice}</p>
                            <p className='mb-4'>Product Name: {product.ProductName}</p>
                            <p className='mb-4'>{product.ProductDiscription}</p>
                            <p className='mb-4'>{product.region}</p>
                            <p className='mb-4'>Address: {product.Address}</p>
                            <p className='mb-4'>Phone No. {product.Phone}</p>
                            <p className='text-orange-500 mb-4'>Status: {product.status}</p>
                        </div>
                    </div>
                    <div className='flex items-center '>
                        <button onClick={() => modalShow(product._id)} className="text-white ml-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                            Cancel order
                        </button>
                        <button onClick={() => handleUpdateStatus(product._id)} className='text-white ml-20 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Shifted</button>


                    </div>

                </div>

                )}
            </div>
        </Dashboard>
    );
};

export default ManageAllOrders;