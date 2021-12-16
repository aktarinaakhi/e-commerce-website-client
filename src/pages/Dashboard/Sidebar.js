import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
    const { admin, logOut } = useAuth();
    return (
        <div>
            <nav>

                <ul className='py-2'>

                    {!admin && <div className='flex flex-col'>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/myOrders">My Orders</NavLink>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/review">Add Review</NavLink>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/pay">Pay</NavLink>

                        <button style={{ width: '100%', textAlign: 'left' }} className="hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3" onClick={() => logOut()}>Logout</button>

                    </div>}

                    {admin && <div className='flex flex-col'>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/manageOrders">Manage All Orders</NavLink>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/addProducts">Add a Products</NavLink>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/manageProducts">Manage Products</NavLink>
                        <NavLink className='hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3' as={Link} to="/admin">Make Admin</NavLink>

                        <button style={{ width: '100%', textAlign: 'left' }} className="hover:border-blue-500 border-b-2 border-l-2 p-2 rounded-sm mb-3" onClick={() => logOut()}>Logout</button>

                    </div>}
                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;