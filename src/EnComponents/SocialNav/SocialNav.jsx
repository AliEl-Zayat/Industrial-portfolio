import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaFacebookF,FaTwitter,FaSnapchatGhost,FaInstagram,FaGoogle,FaEnvelope,FaPhone} from 'react-icons/fa';
import './SocialNav.css'
const SocialNav = () => {
  return (
    <div className='social-nav py-2'>
    <Container>
        <Row>
            <Col md='12' sm='12' lg='6'>
            <div className="icons d-flex gap-3">
            <a href='https://www.facebook.com' className="nav-link" target='_blank' rel="noreferrer"><FaFacebookF/></a>
            <a href='https://www.facebook.com' className="nav-link" target='_blank' rel="noreferrer"><FaTwitter/></a>
            <a href='https://www.facebook.com' className="nav-link" target='_blank' rel="noreferrer"><FaSnapchatGhost/></a>
            <a href='https://www.facebook.com' className="nav-link" target='_blank' rel="noreferrer"><FaInstagram/></a>
            <a href='https://www.facebook.com' className="nav-link" target='_blank' rel="noreferrer"><FaGoogle/></a>
            </div>
            </Col>
            <Col md='12' sm='12' lg='6'>
                <Row>
                    <Col>
                    <a href='mailto:Hessah.alhazzaa@gmail.com' className='nav-link d-flex flex-row-reverse align-items-center gap-3 fw-semibold'><FaEnvelope className='accent-clr'/>Hessah.alhazzaa@gmail.com</a>
                    </Col>
                    <Col>
                    <a href='tel:+966114980580' className='nav-link d-flex flex-row-reverse align-items-center gap-3 fw-semibold'><FaPhone className='accent-clr'/>+966114980580 - +966 50 440 3099</a></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default SocialNav