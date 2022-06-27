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

                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.2.1411646726.1653912072" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.2.1411646726.1653912072" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96 object-fill' src="https://img.freepik.com/free-vector/banner-black-friday-super-sale-realistic-3d-black-shopping-basket_548887-26.jpg?size=626&ext=jpg&ga=GA1.2.1411646726.1653912072" alt="" />
                    </div>

                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;