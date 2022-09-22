import { Container } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection';
import './Services.css';
import axios from 'axios';
import {FaChevronLeft} from 'react-icons/fa';
import {Fade} from 'react-awesome-reveal';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('./data.json')
            .then((res) => {
                setServices(res.data.services);
            })
    }, []);
    return (
        <section className='services py-5' id='services'>
            <Container>
            <Fade cascade duration={700} direction="right" triggerOnce='true'>
                <div className="hos d-flex flex-column align-items-center gap-2">
                    <HeadingOfSection htext="أهم خدماتنا" mtext="خـدمــاتـنــــا" />
                    <hr className='width-edit' />
                </div>
                <Row>
                    {
                        services.map((service) => (
                            <Col lg='3' md='6' key={service.id}>
                                <div className="service-container mt-5">
                                    <img src={service.image} className='img-fluid rounded-1' alt="imng" />
                                    <button className='services-btn'><FaChevronLeft className='chevicon'/></button>
                                    <div className="onhover-width"></div>
                                    <p className='mt-4 services-title'>{service.title}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                </Fade>
            </Container>
        </section>
    )
}

export default Services