import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard';


const GiveReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.name = user.displayName;
        data.image = user.photoURL;
        fetch('https://nameless-sands-15890.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review Added Successfully!')
                reset();
            })
    };

    return (
        <Dashboard>
            <div className='text-center'>
                <h1 className='text-center mb-5 text-xl'> Drop Your Opinion</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label for='reviewRating' className='' style={{ marginRight: '15px', fontSize: '20px' }}>Rating</label>
                    <input name='reviewRating' defaultValue='5' className='border' style={{ padding: '5px', marginBottom: '20px', marginLeft: '32px', width: '50%' }} placeholder="" {...register("reviewRating", { required: true })} />
                    {errors.reviewRating && <span>This field is required</span>}<br />

                    <label for='profession' style={{ color: '#020f24', marginRight: '15px', fontSize: '20px' }}>Profession</label>
                    <input name='profession' className='border' style={{ padding: '5px', marginBottom: '20px', width: '50%' }} placeholder='profession' {...register("profession", { required: true })} />
                    {errors.reviewRating && <span>This field is required</span>}<br />

                    <label for='reviewDescription' style={{ color: '#020f24', marginRight: '15px', fontSize: '20px' }}>Review</label>
                    <input name='reviewDescription' className='border' placeholder='Description' {...register("reviewDescription", { required: true })} style={{ height: '6vw', padding: '5px', marginBottom: '20px', marginLeft: '28px', width: '50%' }} /> <br />
                    {errors.reviewDescription && <span>This field is required</span>}

                    <input type="submit" className='bg-orange-500' style={{ padding: '10px', color: 'white', border: 'none', width: '30%', borderRadius: '5px' }} />
                </form>
            </div>
        </Dashboard>

    );
};

export default GiveReview;