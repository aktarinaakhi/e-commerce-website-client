import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
    const { admin, logOut } = useAuth();
    return (
        <div className='shadow-lg'>
            <nav>

                <ul className='py-2'>

                    {!admin && <div className='flex flex-col text-center'>
                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/myOrders">My Orders</NavLink>

                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/giveReview">Add Review</NavLink>

                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/payment">Pay</NavLink>


                    </div>}

                    {admin && <div className='flex flex-col text-center'>
                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/manageAllOrders">Manage All Orders</NavLink>

                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/addProducts">Add a Products</NavLink>

                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/manageAllProducts">Manage Products</NavLink>

                        <NavLink className='hover:border-gray-500 border-transparent border rounded-sm p-3' as={Link} to="/makeAdmin">Make Admin</NavLink>

                        <button className='hover:border-gray-500 border-transparent border rounded-sm p-3' onClick={() => logOut()}>Logout</button>

                    </div>}
                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;