import React, { useState, useEffect } from "react";
import axios from "axios";
import HeadingOfSection from "../HeadingOfSection/HeadingOfSection";
import "./Projects.css";
import { Col, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [filterApplied, setFilteredApplied] = useState(false);
  useEffect(() => {
    axios.get("./data.json").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);
  const [isActive, setActive] = useState("false");
  const [isMore, setisMore] = useState(8);
  const filterBtn = (index) => {
    setActive(index);
  };
  return (
    <section className="projects py-5">
      <div
        className="hos d-flex flex-column align-items-center gap-2 mb-3"
        id="projects"
      >
        <HeadingOfSection
          htext="The most important projects"
          mtext="Our Projects"
        />
        <hr className="width-edit chr1" />
      </div>
      <Row className="g-0 mt-5">
        <div className="mb-3">
          <ul className="list-unstyled d-flex gap-3 justify-content-center filter-btns-container">
            <li
              className={isActive === 1 ? "active" : null}
              onClick={() => {
                setFilteredApplied(false);
                filterBtn(1);
              }}
            >
              All
            </li>
            <li
              className={isActive === 2 ? "active" : null}
              onClick={() => {
                setFilteredApplied(true);
                filterBtn(2);
                setFiltered("rock");
              }}
            >
              Stone
            </li>
            <li
              className={isActive === 3 ? "active" : null}
              onClick={() => {
                setFilteredApplied(true);
                setFiltered("tile");
                filterBtn(3);
              }}
            >
              Tile
            </li>
            <li
              className={isActive === 4 ? "active" : null}
              onClick={() => {
                setFilteredApplied(true);
                setFiltered("design");
                filterBtn(4);
              }}
            >
              Design
            </li>
          </ul>
        </div>
        {filterApplied
          ? projects
              .filter((item) => item.type === filtered)
              .map((project) => (
                <Col
                  lg="3"
                  md="6"
                  sm="12"
                  key={project.id}
                  data-type={project.type}
                >
                  <Fade
                    cascade
                    duration={700}
                    direction="right"
                    triggerOnce="true"
                  >
                    <div className="project-img-wrapper position-relative">
                      <div className="overlay d-flex align-items-center justify-content-center">
                        <button className="projects-mag-btn">
                          <Link
                            className="projects-mag-btn text-black"
                            to={`/project/${project.id}`}
                          >
                            <FaSearch />
                          </Link>
                        </button>
                      </div>
                      <img
                        src={project.image}
                        className="proj-img w-100"
                        alt="Project"
                      />
                    </div>
                  </Fade>
                </Col>
              ))
          : projects.slice(0, isMore).map((project) => (
              <Col
                lg="3"
                md="6"
                sm="12"
                key={project.id}
                data-type={project.type}
              >
                <Fade
                  cascade
                  duration={700}
                  direction="right"
                  triggerOnce="true"
                >
                  <div className="project-img-wrapper position-relative">
                    <Link
                      className="projects-mag-btn text-black"
                      to={`/project/${project.id}`}
                    >
                      <div className="overlay d-flex align-items-center justify-content-center">
                        <button className="projects-mag-btn">
                          <FaSearch />
                        </button>
                      </div>
                    </Link>
                    <img
                      src={project.image}
                      className="proj-img w-100"
                      max-height="355px"
                      alt="Project"
                    />
                  </div>
                </Fade>
              </Col>
            ))}
      </Row>
      <div className="w-100 d-flex justify-contnet-center mt-5">
        {isMore === 8 ? (
          <button
            className="btn btn-outline-success"
            onClick={() => setisMore(-1)}
          >
            More
          </button>
        ) : (
          <button
            className="btn btn-outline-success"
            onClick={() => setisMore(8)}
          >
            Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
