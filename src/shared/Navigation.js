import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navigation = () => {
    const { logOut, user } = useAuth();
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-3">
            <div className="flex items-center flex-shrink-0 text-white mr-6">

                <span className="font-semibold text-xl tracking-tight">E-ROYAL</span>
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border-2 rounded text-white border-blue-500 hover:text-orange-600 hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow">

                    <Link to="home">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white border border-transparent px-2 rounded-sm hover:border-white hover:text-orange-600 mr-4">
                            Home
                        </span>
                    </Link>
                    <Link to="home">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white border border-transparent px-2 rounded-sm hover:border-white hover:text-orange-600 mr-4">
                            Home
                        </span>
                    </Link>


                </div>

                {!user.email ? <div>
                    <Link to="login">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">
                            Login
                        </span>
                    </Link>
                    <Link to="register">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">
                            Register
                        </span>
                    </Link>
                </div>
                    :
                    <div className='flex justify-center align-center'>
                        <Link to="dashboard">
                            <span className="block mt-4 lg:inline-block lg:mt-0 text-white border border-transparent px-2 rounded-sm hover:border-white hover:text-orange-600 mr-4">
                                Dashboard
                            </span>
                        </Link>
                        <button onClick={() => logOut()} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-3">
                            logout
                        </button>
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-600 mr-4">{user.displayName}</p>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navigation;