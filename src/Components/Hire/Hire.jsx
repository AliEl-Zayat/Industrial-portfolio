import React from 'react'
import { Container } from '@mui/system'
import './Hire.css'
import { Col, Row } from 'react-bootstrap'
import Mag from './imgs/mag.png'
import HeadingOfSection from '../HeadingOfSection/HeadingOfSection'
const Hire = () => {
  return (
    <section className="hire" id="hire">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="hire-img-wrapper position-relative">
                <img src={Mag} alt="hire" className='img-fluid hire-vector'/>
                </div>
                </Col>
            <Col lg='6'>
                <div className="bla-slogan">
                <HeadingOfSection htext="انضم الينا" mtext="الـتوظـــيـف"/>
                <hr className='text-white opacity-50 w-25'/>
                <p className="hiring-text">مصنع كاف للصناعة بدأت عام 1978م لإنتاج البلاط و صناعة الرخام و الحجر و الزخرفة بالمدينة الصناعية الثانية بالرياض .
استقطب مصنع كاف كم من الفنيين و ذوي الخبرة في مجال الحجر و الرخام للخروج بأفضل المعايير و الجودة و الجمالية للمساهمة في النهضة العمرانية و الإبداعية في وطننا الغالي.
</p>
                </div>
                <button className='btn accent-clr hire-me my-2'>انضم الينا</button>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Hire