import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">

                <span class="font-semibold text-xl tracking-tight">E-ROYAL</span>
            </div>

            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-lg lg:flex-grow">

                    <Link to="home">
                        <span class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </span>
                    </Link>
                    <Link to="home">
                        <span class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </span>
                    </Link>


                </div>

                <div>
                    <Link to="/login">
                        <span class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Login
                        </span>
                    </Link>
                    <Link to="/register">
                        <span class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Register
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;