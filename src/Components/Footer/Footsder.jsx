import React from 'react'
import './Footer.css'
import LogoF from './imgs/footer-logo.svg'
import {FaMapMarkerAlt,FaPhone,FaEnvelope,FaFax} from 'react-icons/fa'
import { Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
    <footer className="text-center text-lg-start bg-custom text-muted">
    <section className="main-footer">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4"> 
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>
              <img src={LogoF} alt="logof" />
            </h6>
            <p className='fw-semibold mt-5 footer-brief'>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو 
            </p>
          </div>
          <div className="col-md-2 col-lg-1 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 accent-clr">
            روابط هامة
            </h6>
            <p>
              <a href="#!" className="text-reset text-end">من نحن</a>
            </p>
            <p>
              <a href="#!" className="text-reset text-end">الاسئله الشائعه</a>
            </p>
            <p>
              <a href="#!" className="text-reset text-end">الشروط و الأحكام</a>
            </p>
            <p>
              <a href="#!" className="text-reset text-end">التوظيف</a>
            </p>
            <p>
              <a href="#!" className="text-reset text-end">اتصل بنا</a>
            </p>
          </div>
          <Col lg='1'></Col>
          <div className="col-md-3 col-lg-1 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 accent-clr text-end">
              تواصل معنا عبر
            </h6>
            <p>
              <a href="#!" className="text-reset d-flex text-end contacts-links">
              <FaMapMarkerAlt className='accent-clr'/>
              <p>
              المدينة الصناعية الجديدة، الرياض
              </p>
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset d-flex text-end contacts-links">
                <FaPhone className='accent-clr'/>+966114980580  -  +966 50 440 3099
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset d-flex text-end contacts-links">
                <FaEnvelope className='accent-clr'/>Hessah.alhazzaa@gmail.com
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset d-flex text-end contacts-links">
                <FaFax className='accent-clr'/>+966114981206
              </a>
            </p>
          </div>
          <Col lg='1'></Col>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 accent-clr">نشرة أخبارنا</h6>
            <p className='me-1'>اشترك في نشرة الأخبار ليصلك كل جديد</p>
            <p>
                <input type="email" name="email" id="email" required/>
                <label htmlFor="email"></label>
            </p>

            </div> 
        </div>
      </div>
    </section>
    <div className="text-center p-4">
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
  </>
  )
}

export default Footer