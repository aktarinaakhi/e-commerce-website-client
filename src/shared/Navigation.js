import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import useAuth from '../hooks/useAuth';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navigation = () => {
    const { logOut, user } = useAuth();
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-3">
            <div className="flex items-center flex-shrink-0 text-black ml-44">
                <Link to="home">
                    <img className='w-full' src={logo} alt="" />
                </Link>
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border-2 rounded text-black border-blue-500 hover:text-orange-600 hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto mr-44">
                <div className="text-lg lg:flex-grow items-center">

                    <input
                        className="shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-4/5 ml-16  "
                        id="name"
                        type="name"
                        placeholder="search product..." />
                </div>

                {!user.email ? <div>
                    <Link to="login">
                        <span className="block text-xl mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-600 mr-4">
                            Login
                        </span>
                    </Link>
                    <Link to="register">
                        <span className="block text-xl mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-600 mr-4">
                            Register
                        </span>
                    </Link>
                </div>
                    :
                    <div style={{textAlign:"center"}} className='flex justify-center items-center'>

                        <BsFillCartCheckFill style={{fontSize:"28px"}} />

                        <Link to="dashboard">
                            <span className="block mt-4 lg:inline-block lg:mt-0 text-black border border-transparent px-2 rounded-sm hover:border-white hover:text-orange-600 mr-1 text-lg">
                                Dashboard
                            </span>
                        </Link>
                        <button onClick={() => logOut()} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-3">
                            logout
                        </button>
                        <p className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-600 mr-4 text-lg">{user.displayName}</p>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navigation;