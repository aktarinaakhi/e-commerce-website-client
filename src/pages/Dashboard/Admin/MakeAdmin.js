import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { error } = useAuth();

    const handleOnblur = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('https://nameless-sands-15890.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true);
                setEmail('')
                console.log(data)
            }

            )


        e.preventDefault();
    }
    return (
        <Dashboard>
            <div className='text-center my-10 shadow-lg mx-10'>
                <h2 className='mt-5 text-center text-2xl mb-10'>Make Admin</h2>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleOnblur} name="email" placeholder="Enter email" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-1/2" /> <br />

                    <input type="submit" className="bg-blue-500 hover:bg-blue-400  text-white py-2 px-4 my-10 border rounded w-28" /> <br />
                    {error.email && <span>This field is required</span>}
                </form>
                {success && <h2 variant="success"> Made Admin successfully!</h2>}
            </div>
        </Dashboard>
    );
};

export default MakeAdmin;