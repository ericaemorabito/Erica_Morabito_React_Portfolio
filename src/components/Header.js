import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/header.css";
import { motion } from "framer-motion";
import Resume from "../resume/EricaMorabitoResume.pdf";

const svgVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 1 },
  },
  hover: {
    scale: 1.2,
  },
};

function Header() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/Erica_Morabito_React_Portfolio/#">
        <motion.svg
          variants={svgVariants}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          id="logo"
          width="69"
          height="40"
          viewBox="0 0 69 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.56 48V0.959999H16.368V8.064H7.472V20.736H13.872V27.648H7.472V40.896H16.368V48H0.56ZM20.6015 48V40.896H27.3215V48H20.6015ZM31.56 48V0.959999H40.328L44.104 25.344L44.424 27.84H44.552L44.872 25.344L48.648 0.959999H57.416V48H51.016V16.448H50.632L50.376 18.432L46.28 48H42.696L38.6 18.432L38.344 16.448H37.96V48H31.56ZM61.664 48V40.896H68.384V48H61.664Z"
            fill="black"
          />
        </motion.svg>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-end"
      >
        <Nav className="nav-bar">
          <Nav.Link
            as="a"
            href="/Erica_Morabito_React_Portfolio/#/about"
            className="nav-item"
          >
            About
          </Nav.Link>
          <Nav.Link
            as="a"
            href="/Erica_Morabito_React_Portfolio/#/work"
            className="nav-item"
          >
            Work
          </Nav.Link>
          <Nav.Link
            as="a"
            href="/Erica_Morabito_React_Portfolio/#/contact"
            className="nav-item"
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as="a"
            href={Resume}
            rel="noreferrer"
            target="_blank"
            className="nav-item"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
