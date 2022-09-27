/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./HeaderLanding.css";
import slide1 from "./imgs/image1.jpg";
import slide2 from "./imgs/image2.jpg";
import slide3 from "./imgs/image3.jpg";
import slide4 from "./imgs/image4.jpg";
import slide5 from "./imgs/image5.jpg";
import slide6 from "./imgs/image6.jpg";
import slide7 from "./imgs/image7.jpg";
const HeaderLanding = () => {
  return (
    <header id="landing">
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
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-overlay"></div>
          <img src={slide2} alt="image number" />
          <div className="slider-text-wrapper position-absolute">
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-overlay"></div>
          <img src={slide3} alt="image number" />
          <div className="slider-text-wrapper position-absolute">
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-overlay"></div>
          <img src={slide4} alt="image number" />
          <div className="slider-text-wrapper position-absolute">
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-overlay"></div>
          <img src={slide5} alt="image number" />
          <div className="slider-text-wrapper position-absolute">
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-overlay"></div>
          <img src={slide6} alt="image number" />
          <div className="slider-text-wrapper position-absolute">
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-overlay"></div>
          <img src={slide7} alt="image number" />
          <div className="slider-text-wrapper position-absolute">
            <h1 className="landing-slogan">
              Since
              <span className="accent-clr me-3">1978</span>
            </h1>
            <span className="chr"></span>
            <div className="d-flex gap-4">
              <h1>
                Municipal tiles
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Stone
                <span className="accent-clr">.</span>
              </h1>
              <h1>
                Marble
                <span className="accent-clr">.</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default HeaderLanding;
