import React from 'react';
import { Pagination,Autoplay,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from "../../../images/banner1.png"
import banner2 from "../../../images/banner2.jpg"
import banner4 from "../../../images/banner4.png"
import banner5 from "../../../images/banner5.png"
import banner6 from "../../../images/banner6.jpg"

const Banner = () => {
    return (
        <div className='relative'>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                 delay: 5000,
                 disableOnInteraction: false,
               }}
               pagination={{
                 clickable: true,
               }}
               modules={[Autoplay, Pagination]}
               className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full' src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={banner2} alt="" />
                </SwiperSlide>
                
                <SwiperSlide>
                        <img className='w-full' src={banner4} alt="" />                
                </SwiperSlide>
                <SwiperSlide>
                        <img className='w-full' src={banner5} alt="" />                
                </SwiperSlide>
                <SwiperSlide>
                        <img className='w-full' src={banner6} alt="" />                
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;