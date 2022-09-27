import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CanavesNavBar from "../CanavesNavBar/CanavesNavBar";
import { Col, Container, Row } from "react-bootstrap";
import "./ProjectDisplay.css";
import projectsData from "./data.json";
const ProjectDisplay = () => {
  const [projects, setProjects] = useState(projectsData.projects);
  const { id } = useParams();
  const isProject = projects.find((project) => project.id === id);
  const [readMe, setReadMe] = useState(false);
  return (
    <section id="project-details">
      <div className="bg-green">
        <Container>
          <Row>
            <Col lg="8" md="6" sm="12">
              <div className="header-text-wrapper">
                <h1 className="text-white">Project implemented by us</h1>
                <h3 className="text-white-50">Somewhere...</h3>
                <p
                  className={
                    readMe ? "project-brief" : "project-brief-overflowed"
                  }
                >
                  Background: Sweep is an Internet of Things (IoT) company that
                  harnesses big data and machine learning to improve operational
                  efficiency in the industry. We depend on Collect valuable
                  industrial equipment data through non-invasive sensor
                  technologies Invasive to serve our industrial/commercial
                  clients. The development of products Sensor technologies fuel
                  our growth and innovation is critical to reducing costs and
                  capacity improvement. Problem: Require machine centers in
                  operation Our production is that the product is moved manually
                  between machine centers This increases the time it takes to
                  produce the product and increases the risk of Defects occur
                  due to manual processing of the product. Goal: improve
                  production line Manufacturing for small and medium operations
                  of manufacturing components Electrical and mechanical. Analyze
                  and make recommendations for the most practical Timely
                  efficiency of circuit board laying, testing and assembly and
                  logistics. Building, manufacturing and testing automation
                  components to reduce user interaction. Automation of the
                  production of mechanical injection molded components PCB
                  assemblies and finished product assembly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setReadMe(!readMe)}
                >
                  Read More
                </button>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className="prod-img-wrapper">
                <img
                  src={isProject.image}
                  alt=""
                  className="float-left img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ProjectDisplay;
