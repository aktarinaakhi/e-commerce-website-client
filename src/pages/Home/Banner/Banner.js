import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide >
                    <img className='w-full h-96 object-cover' src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmclMjBvbmxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-cover' src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjBvbmxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://images.unsplash.com/photo-1576072446584-4955dfe17b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmclMjBvbmxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;