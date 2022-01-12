import React from 'react';
import { Link } from 'react-router-dom';
import payment_image from '../images/contact.18588cb5.png'

const Footer = () => {
    return (
        <div className='text-center mt-10'>
            <hr className='mx-10' />
            <div className='py-6'>
                <p>See personalized recommendations</p>
                <div className='my-2'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-10 border border-blue-700 rounded'>Sign in</button>
                </div>
                <span>
                    <small>New cusstomer?</small>
                    <Link to="register">Start here</Link>

                </span>
            </div>
            <hr className='mx-10' />

            <div className='mt-8'>
                <Link to="/">
                    <button className='bg-slate-600 hover:bg-slate-600 text-white font-semibold py-2 w-full'>Back to top</button>
                </Link>
            </div>


            {/* main footer */}

            <div className='py-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1  bg-slate-700  px-10'>
                <div>
                    <img src={payment_image} alt="" />
                </div>
                <div className='text-white text-left'>
                    <h2 className="pb-3 text-xl bold">About us</h2>
                    <p> Our Gallery</p>
                    <p> Our Horizons</p>
                    <p>Our People </p>
                    <p> Our Community</p>
                    <p> Sustanability</p>
                </div>
                <div className='text-white text-left'>
                    <h2 className="pb-3 text-xl bold">How We hire</h2>
                    <p> Our Values</p>
                    <p> Interview</p>
                    <p>FAQ </p>
                    <p> Gallery</p>
                    <p> Sitemap</p>
                </div>
                <div className='text-white text-left'>
                    <h4 className="pb-3">Follow Us</h4>
                    <p>House #16, Road # 2, Dhanmondi R/A, Dhaka-1205,Bangladesh </p>
                    <p>Phone : 09613 787801, 09666 787801</p>
                    <p>E-mail : info@tourbooking.com</p>
                    <div>
                        <span><i className="bi bi-facebook"></i></span>
                        <span><i className="bi bi-youtube"></i></span>
                        <span><i className="bi bi-linkedin"></i></span>
                        <span><i className="bi bi-twitter"></i></span>
                        <span><i className="bi bi-instagram"></i></span>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;
