import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/header.css';

function Header() {
  return (
    <Navbar expand="lg">
        <Navbar.Brand href="/">E.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
          
          {/* Supposed to change alighnment */}
          <Nav className="nav-bar">
            <Nav.Link as="a" href="/about" className='nav-item'>About</Nav.Link>
            <Nav.Link as="a" href="/work" className='nav-item'>Work</Nav.Link>
            <Nav.Link as="a" href="/contact" className='nav-item'>Contact</Nav.Link>
            <Nav.Link as="a" href="#resume" className='nav-item'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;