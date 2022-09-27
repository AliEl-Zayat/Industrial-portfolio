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
                <HeadingOfSection
                  htext="
                Brief About
                "
                  mtext="
                  Kaf Factory For Industry
                  "
                />
                <span className="chr1"></span>
                <p className="fw-semibold w-100 lh-base brief-text">
                  Kaf Factory for Industry started in 1978 for the production of
                  tiles and marble industry Stone and decoration in the second
                  industrial city in Riyadh.
                  <br />
                  Kaf Factory has attracted a number of technicians and
                  experienced in the field of stone and Marble to come out with
                  the best standards, quality and aesthetics to contribute to
                  the The urban and creative renaissance in our dear homeland.
                </p>
                <button className="_btn mt-4">Read More</button>
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
              <p>Implemented project</p>
            </div>
            <span className="vhr"></span>
            <div className="floated-number-wrapper">
              <p className="number">
                <CountUp delay={10} end={43} />
              </p>
              <p>Year of experience</p>
            </div>
            <span className="vhr"></span>
            <div className="floated-number-wrapper">
              <p className="number">
                <CountUp delay={10} end={2640} />
              </p>
              <p>Design</p>
            </div>
            <span className="vhr"></span>
            <div className="floated-number-wrapper">
              <p className="number">
                <CountUp delay={10} end={1500} />
              </p>
              <p>Client</p>
            </div>
          </div>
        </Zoom>
      </Container>
    </section>
  );
};

export default Brief;
