import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
    return (
        <div>
            <h2 className='text-3xl text-center py-2 bg-slate-50'>dashboard</h2>

            <div className='md:container md:mx-auto'>
                <div className="my-4 flex flex-row">
                    <div className="sm:basis-full md:basis-3/4 lg:basis-3/4 max-w-sm">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="sm:basis-full md:basis-3/4 lg:basis-3/4">
                        {children}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;