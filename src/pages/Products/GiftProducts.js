import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { Link } from 'react-router-dom';

const GiftProducts = () => {
    SwiperCore.use([EffectCoverflow, Pagination]);

    const giftState = useSelector(state => state.products.allProducts);

    const giftProducts = giftState.filter(homeProduct => homeProduct.category === 'gift')


    return (
        <div>
            <div className="max-w-2xl mx-auto py-8 px-4 lg:py-4 sm:py-9 sm:px-6 lg:max-w-7xl lg:px-1">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Gift</h2>

                </div>
                <hr />
                <div>
                    <Swiper
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                        // slidesPerView={4}
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
                        className="mySwiper"
                    >

                        {giftProducts.map(product => <SwiperSlide
                            key={product._id}
                            className='hover:shadow-lg my-4 w-96'
                        >
                            <Link to={`/addToCart/${product._id}`}>

                                <div>
                                    <img src={product.image} alt="" className='mb-3 h-64' />
                                    <div className='px-3'>
                                        <p>{product.name.slice(0, 30)}</p>
                                        <p>{product.descriptoin}</p>
                                        <p>{product.price}</p>
                                    </div>
                                </div>

                            </Link>

                        </SwiperSlide>)}
                    </Swiper>
                </div>

            </div >







        </div>


    );
};

export default GiftProducts;