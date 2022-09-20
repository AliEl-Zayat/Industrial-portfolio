import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import saudi from './imgs/Arab.png';
import logo from './imgs/logo.png';
import {FaChevronDown} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Naavbar.css'
function Naavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Kaaf Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="d-flex me-auto">
            <NavLink className='nav-link fw-bold' to="/">الرئيسية</NavLink>
            <NavLink className='nav-link fw-bold' to="/who">من نحن</NavLink>
            <NavLink className='nav-link fw-bold' to="/services">الخدمات</NavLink>
            <NavLink className='nav-link fw-bold' to="/projects">المشاريع</NavLink>
            <NavLink className='nav-link fw-bold' to="/news">الأخبار</NavLink>
            <NavLink className='nav-link fw-bold' to="/hire">التوظيف</NavLink>
            <NavLink className='nav-link fw-bold' to="/sells">المبيعات و التواصل</NavLink>
            <NavLink to="/lang" className='d-flex gap-3 align-items-center nav-link fw-bold me-5'>
              <img src={saudi} width='23px' height='15px' alt="Arabic" />
              العربية
              <FaChevronDown/>
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;