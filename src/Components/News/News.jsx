import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@mui/system'
import "./News.css"
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import { FaChevronLeft } from 'react-icons/fa';
// Swiper Js
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('./data.json')
            .then((res) => {
                setNews(res.data.news);
            })
    }, []);
    return (
        <section id="news" className="news py-5">
            <div className="d-flex w-100 align-items-center justify-content-center flex-column hos">
                <HeadingOfSection htext="أخبار كاف" mtext="أخبـارنـــا" />
                <hr className='width-edit mb-5' />
            </div>
            <Container>
                <Swiper
                    autoHeight='true'
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={
                        {
                            766:{
                                slidesPerView: 1,
                                spaceBetween: 10,
                                slidesPerGroup: 1,
                            },
                            767:{
                                slidesPerView: 3,
                                spaceBetween: 20,
                                slidesPerGroup: 3,   
                            }
                        }
                    }
                >
                    {news.map((newItem) => (
                        <SwiperSlide key={newItem.id}>
                            <div className="_card position-relative d-flex justify-content-center">
                                <img src={newItem.image} className='rounded-1' alt="img" width='360px' height='450px' />
                                <div className="_card-text-wrapper d-flex flex-column align-items-center mx-auto">
                                    <div className="_card-heading w-75 text-center lh-base d-flex flex-column align-items-center py-3">
                                        {newItem.title}
                                        <hr className='accent-clr w-25 opacity-100' />
                                        <p className='_card-date'>{newItem.date}</p>
                                    </div>

                                    <div className="btn-trick w-100">
                                        <button className='btnre'>
                                            <FaChevronLeft className='accent-clr change-hover-clr' />
                                        </button>
                                        <span className='for-hover'></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="w-100 d-flex justify-contnet-center">
                <button className='btn btn-outline-success read-more'>المزيد</button>
                </div>
            </Container>
        </section>
    )
}

export default News