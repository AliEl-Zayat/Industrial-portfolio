import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "@mui/system";
import HeadingOfSection from "../HeadingOfSection/HeadingOfSection";
import "./Brief.css";
import briefImage from "./imgs/brief.jpg";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
const Brief = () => {
  return (
    <section id="brief" className="py-5">
      <Container className="position-relative">
        <Row>
          <Col lg="6" md="6" className="mt-5">
            <div className="mob-text-fix">
              <Fade cascade duration={700} direction="right" triggerOnce="true">
                <HeadingOfSection htext="نبذه عن" mtext="مصنع كاف للصناعه" />
                <span className="chr1"></span>
                <p className="fw-semibold w-100 lh-base brief-text ps-lg-5">
                  مصنع كاف للصناعة بدأت عام 1978م لإنتاج البلاط و صناعة الرخام و
                  الحجر و الزخرفة بالمدينة الصناعية الثانية بالرياض .
                  <br />
                  استقطب مصنع كاف كم من الفنيين و ذوي الخبرة في مجال الحجر و
                  الرخام للخروج بأفضل المعايير و الجودة و الجمالية للمساهمة في
                  النهضة العمرانية و الإبداعية في وطننا الغالي.
                </p>
                <button className="_btn mt-4">اقرا المزيد</button>
              </Fade>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="img-wrapper d-flex align-items-center justify-content-center">
              <Zoom delay={700} triggerOnce="true">
                <img
                  src={briefImage}
                  alt="briefImage"
                  className="img-fluid rounded"
                />
              </Zoom>
            </div>
          </Col>
        </Row>
        <Zoom delay={1400} triggerOnce="true">
          <div className="floatin-numbers d-flex gap-5">
            <div className="floated-number-wrapper">
              <p className="number">
                +<CountUp delay={10} end={5000} />
              </p>
              <p>مشروع تم تنفيذه</p>
            </div>
            <span className="vhr"></span>
            <div className="floated-number-wrapper">
              <p className="number">
                <CountUp delay={10} end={43} />
              </p>
              <p>عام من الخبرة</p>
            </div>
            <span className="vhr"></span>
            <div className="floated-number-wrapper">
              <p className="number">
                <CountUp delay={10} end={2640} />
              </p>
              <p>تصميم</p>
            </div>
            <span className="vhr"></span>
            <div className="floated-number-wrapper">
              <p className="number">
                <CountUp delay={10} end={1500} />
              </p>
              <p>عميل</p>
            </div>
          </div>
        </Zoom>
      </Container>
    </section>
  );
};

export default Brief;
