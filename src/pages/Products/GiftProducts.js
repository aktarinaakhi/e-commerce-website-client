import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { fetchProducts } from '../../Redux/slices/productSlice';

const GiftProducts = () => {
    SwiperCore.use([EffectCoverflow, Pagination]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const giftState = useSelector(state => state.products.gift);

    const giftProducts = giftState.filter(homeProduct => homeProduct.category === 'gift')
    console.log(giftProducts);



    return (
        <div className="">
            <div className="max-w-2xl mx-auto py-16 px-4 lg:py-1 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-3">Gift</h2>

                </div>
                <hr />

                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        centeredSlides={true}
                        loop={true}
                        grabCursor={true}
                        loopFillGroupWithBlank={true}
                        pagination={{

                            "clickable": true
                        }}
                        navigation={true}
                        className="mySwiper">
                        {giftProducts.map(product => <SwiperSlide
                            key={product._id}
                            className='hover:shadow-lg my-4 w-96'
                        >

                            <img src={product.image} alt="" className='mb-3 h-64' />
                            <div className='px-3'>
                                <p>{product.descriptoin}</p>
                                <p>{product.price}</p>
                            </div>


                        </SwiperSlide>)}


                    </Swiper>


                </div>

            </div >







        </div>


    );
};

export default GiftProducts;