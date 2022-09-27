import React from "react";
import { Container } from "@mui/system";
import "./Hire.css";
import { Col, Row } from "react-bootstrap";
import Mag from "./imgs/mag.png";
import HeadingOfSection from "../HeadingOfSection/HeadingOfSection";
import HireModal from "../HireModal/HireModal";
const Hire = () => {
  return (
    <section className="hire" id="hire">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hire-img-wrapper position-relative">
              <img src={Mag} alt="hire" className="img-fluid hire-vector" />
            </div>
          </Col>
          <Col lg="6">
            <div className="bla-slogan">
              <HeadingOfSection htext="Join us" mtext="Recruitment" />
              <hr className="text-white opacity-50 w-25" />
              <p className="hiring-text">
                Kaf Factory for Industry started in 1978 for the production of
                tiles and marble industry Stone and decoration in the second
                industrial city in Riyadh. attracted factory Enough how many
                technicians and experienced in the field of stone and marble to
                get out The best standards, quality and aesthetics to contribute
                to the urban renaissance And creativity in our dear country.
              </p>
            </div>
            <HireModal />
            {/* <button className="btn accent-clr hire-me my-2">انضم الينا</button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hire;
