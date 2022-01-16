
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../Redux/slices/ReviewSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination"

const Reviews = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReviews());
    }, [])

    const allReviews = useSelector(state => state.review.allreviews);

    return (

        <div className="mx-auto rounded-2xl bg-slate-100 h-96">
            <div className="review-title pt-2 text-center">
                <h2 className='relative py-6 text-2xl bold'>What our client say..!</h2>
            </div>
            <div className=" mx-6">

                <div className=" bg-white rounded-lg border border-gray-200 shadow-md ">

                    <Swiper slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            "clickable": true
                        }}
                        className="mySwiper">

                        {
                            allReviews.map((review) => <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center pb-10 my-7 max-w-lg shadow-lg mx-7 rounded-lg">
                                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg"
                                        src={review?.img}
                                        alt={review?.img} />
                                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{review?.name}</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{review?.profession}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{review?.reviewDescription}</span>

                                </div>

                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>
        </div>

    );
};

export default Reviews;







