import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const GiftProducts = () => {
    SwiperCore.use([EffectCoverflow, Pagination]);

    const giftState = useSelector(state => state.products.allProducts);

    const giftProducts = giftState.filter(homeProduct => homeProduct.category === 'gift')


    return (
        <div className="">
            <div className="max-w-2xl mx-auto py-8 px-4 lg:py-4 sm:py-9 sm:px-6 lg:max-w-7xl lg:px-8">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Gift</h2>

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