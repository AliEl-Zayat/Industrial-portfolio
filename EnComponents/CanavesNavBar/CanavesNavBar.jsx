import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import uk from "./imgs/Flag_of_the_United_Kingdom.png";
import logo from "./imgs/logo.png";
import { FaChevronDown } from "react-icons/fa";
import "./Naavbar.css";
import { HashLink } from "react-router-hash-link";

function CanavesNavBar() {
  const navTogglerFun = () => {
    if (window.innerWidth <= 767) {
      document.querySelector(".btn-close").click();
    }
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} bg="white">
          <Container>
            <Navbar.Brand to="/">
              <NavLink to="/" className="nav-link">
                <img src={logo} alt="" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="nav-link" onClick={navTogglerFun}>
                    Home
                  </NavLink>
                  <HashLink
                    className="nav-link fw-bold"
                    onClick={navTogglerFun}
                    to="#brief"
                  >
                    Who we are
                  </HashLink>
                  <HashLink
                    className="nav-link fw-bold"
                    onClick={navTogglerFun}
                    to="#services"
                  >
                    Services
                  </HashLink>
                  <HashLink
                    className="nav-link fw-bold"
                    onClick={navTogglerFun}
                    to="#projects"
                  >
                    Projects
                  </HashLink>
                  <HashLink
                    className="nav-link fw-bold"
                    onClick={navTogglerFun}
                    to="#news"
                  >
                    News
                  </HashLink>
                  <HashLink
                    className="nav-link fw-bold"
                    onClick={navTogglerFun}
                    to="#hire"
                  >
                    Hiring
                  </HashLink>
                  <HashLink
                    className="nav-link fw-bold"
                    onClick={navTogglerFun}
                    to="#main-footer"
                  >
                    Sales and Contact{" "}
                  </HashLink>
                  {/* <NavLink to="/Testimonials" className='nav-link' onClick={navTogglerFun}>Testimonials</NavLink> */}
                  <button className="btn d-flex justify-content-center gap-3 align-items-center nav-link fw-bold me-5 lang-dropdown">
                    <img src={uk} width="23px" height="15px" alt="Arabic" />
                    English
                    <FaChevronDown />
                    <div className="_dropdown position-absolute">
                      <span className="arrow-up"></span>
                      <ul className="list-unstyled d-flex flex-column gap-3">
                        <li>
                          <button>العربيه</button>
                        </li>
                        <li>
                          <button className="active">English</button>
                        </li>
                      </ul>
                    </div>
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CanavesNavBar;
