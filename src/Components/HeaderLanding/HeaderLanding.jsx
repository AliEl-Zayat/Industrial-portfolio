import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./HeaderLanding.css";
import slide1 from './imgs/image1.jpg'
import slide2 from './imgs/image2.jpg'
import slide3 from './imgs/image3.jpg'
import slide4 from './imgs/image4.jpg'
import slide5 from './imgs/image5.jpg'
import slide6 from './imgs/image6.jpg'
import slide7 from './imgs/image7.jpg'
const HeaderLanding = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide1} alt="image number" />
            <div className="slider-text-wrapper position-absolute">
                <h1 className="landing-slogan">منذ عام
                    <span className="accent-clr me-3">1978</span>
                </h1>
                <span className="chr"></span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide2} className='img-fluid' alt="image 1"/>
            </SwiperSlide>
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide3} className='img-fluid' alt="image 1"/>
            </SwiperSlide>
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide4} className='img-fluid' alt="image 1"/>
            </SwiperSlide>
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide5} className='img-fluid' alt="image 1"/>
            </SwiperSlide>
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide6} className='img-fluid' alt="image 1"/>
            </SwiperSlide>
        <SwiperSlide>
            <div className="slider-overlay"></div>
            <img src={slide7} className='img-fluid' alt="image 1"/>
            </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HeaderLanding