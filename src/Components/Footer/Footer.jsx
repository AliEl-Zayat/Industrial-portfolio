import React from 'react'
import { Container } from '@mui/system'
import { Col, Row } from 'react-bootstrap'
import FooterLogo from './imgs/footer-logo.svg';
import './Footer.css'
import {FaMapMarkerAlt,FaPhone,FaEnvelope,FaFax,FaChevronLeft,FaSnapchatGhost,FaWhatsapp,FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='py-5' id='main-footer'>
      <Container>
        <Row>
          <Col lg='4' md='4'>
            <img src={FooterLogo} alt="" />
            <p className='text-white footer-brief mt-5 pt-3 w-100'>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم 
            </p>
          </Col>
    <Col lg='2' md='2'>
      <ul className='list-unstyled footer-list-one'>
        <p className='heading-of-list accent-clr mb-1'>روابط هامة</p>
        <li>
          <a href="#ASD">
          من نحن

          </a>
        </li>
        <li>
          <a href="#ASD">
          الاسئلة الشائعة

          </a>
        </li>
        <li>
          <a href="#ASD">
          الشروط والأحكام

          </a>
        </li>
        <li>
          <a href="#BES">
          التوظيف

          </a>
        </li>
        <li>
          <a href="#BES">اتصل بنا</a>
        </li>
      </ul>
    </Col>
    <Col lg='3' md='3'>
    <ul className='list-unstyled footer-list-one'>
        <p className='heading-of-list accent-clr mb-1'>
        تواصل معنا عبر
          </p>
        <li>
          <a href="#BES">
            <FaMapMarkerAlt className='accent-clr'/>المدينة الصناعية الجديدة، الرياض
          </a>
        </li>
        <li>
          <a href="#BES">
            <FaPhone className='accent-clr'/>+966114980580  -  +966 50 440 3099


          </a>
        </li>
        <li>
          <a href="#BES">
            <FaEnvelope className='accent-clr'/>Hessah.alhazzaa@gmail.com

          </a>
        </li>
        <li>
          <a href="#BES">
            <FaFax className='accent-clr'/>+966114981206

          </a>
        </li>
      </ul>
    </Col>
    <Col lg='3' md='3'>
    <ul className='list-unstyled footer-list-one'>
        <p className='heading-of-list accent-clr mb-1'>
        نشرة أخبارنا
          </p>
        <li>
          <p className='mb-1'>
          اشترك في نشرة الأخبار ليصلك كل جديد
          </p>

        </li>
        <li>
          <div className="input-tricks position-relative">
        <input type="email" name="email" id="email" required/>
        <label htmlFor="email">example@gmail.com</label>
        <FaEnvelope className='accent-clr floated-icon'/>
        <FaChevronLeft className='accent-clr floated-icon'/>
        </div>
        </li>
      </ul>
      <ul className='d-flex list-unstyled justify-content-between mt-5'>
        <li className='icon-wrapper'>
          <a href="#ico" className='icon-wrapper'><FaSnapchatGhost/></a>
          </li>
        <li className='icon-wrapper'>
          <a href="#ico" className='icon-wrapper'><FaWhatsapp/></a>
          </li>
        <li className='icon-wrapper'>
          <a href="#ico" className='icon-wrapper'><FaInstagram/></a>
          </li>
        <li className='icon-wrapper'>
          <a href="#ico" className='icon-wrapper'><FaTwitter/></a>
          </li>
        <li className='icon-wrapper'>
          <a href="#ico" className='icon-wrapper'><FaFacebookF/></a>
          </li>
      </ul>
    </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer