import React from 'react';
import { Link } from 'react-router-dom';

const CombineFourProducts = () => {
    return (
        <div className='bg-slate-100 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 max-w-2xl mx-auto py-16 px-4 lg:py-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 absolute inset-x-0 bottom-0 z-10'>
            <div className=''>
                <h2 className='my-3 font-bold text-2xl'>Baby</h2>
                <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

                <Link to="/baby">
                    <button className='bg-transparent mr-2 my-4 hover:text-orange-500'>Shop more</button>
                </Link>

            </div>
            <div>
                <h2 className='my-3 font-bold text-2xl'>Mobiles</h2>
                <img src="https://images.unsplash.com/photo-1551817958-20204d6ab212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <Link to="/mobile">
                    <button className='bg-transparent mr-2 my-4 hover:text-orange-500'>Shop more</button>

                </Link>
            </div>
            <div>
                <h2 className='my-3 font-bold text-2xl'>Computer & accesories</h2>
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

                <Link to="/computer">
                    <button className='bg-transparent mr-2 my-4 hover:text-orange-500'>Shop more</button>

                </Link>
            </div>
            <div>
                <h2 className='my-3 font-bold text-2xl'>Toys & Sport</h2>
                <img src="https://images.unsplash.com/photo-1618325366510-289151181310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXMlMjAlMjYlMjBzcG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                <Link to="/toysAndSport">
                    <button className='bg-transparent mr-2 my-4 hover:text-orange-500'>Shop more</button>

                </Link>
            </div>

        </div>
    );
};

export default CombineFourProducts;