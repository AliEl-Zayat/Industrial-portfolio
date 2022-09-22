import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import saudi from './imgs/Arab.png';
import logo from './imgs/logo.png';
import {FaChevronDown} from 'react-icons/fa';
import './Naavbar.css'

function CanavesNavBar() {
    const navTogglerFun = () => {
        if( window.innerWidth <= 767 ){
          document.querySelector('.btn-close').click();
        }
      }
  return (
    <>
      {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} bg='white'>
                    <Container>
                        <Navbar.Brand to="/"><NavLink to='/' className='nav-link'><img src={logo} alt="" /></NavLink>
                            
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/">الرئيسية</NavLink>
                            <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/who">من نحن</NavLink>
                            <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/services">الخدمات</NavLink>
                            <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/projects">المشاريع</NavLink>
                            <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/news">الأخبار</NavLink>
                            <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/hire">التوظيف</NavLink>
                            <NavLink className='nav-link fw-bold' onClick={navTogglerFun} to="/sells">المبيعات و التواصل</NavLink>
                                    {/* <NavLink to="/Testimonials" className='nav-link' onClick={navTogglerFun}>Testimonials</NavLink> */}
                                    <NavLink to="/lang" className='d-flex gap-3 align-items-center nav-link fw-bold me-5'>
              <img src={saudi} width='23px' height='15px' alt="Arabic" />
              العربية
              <FaChevronDown/>
              </NavLink>
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