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
                    <img className='w-full h-96' src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" alt="" />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;