import "./styles/about.css";
import image from "../images/profilepic.jpeg";
import Skills from "./Skills";
import { motion } from "framer-motion";
import Resume from "../resume/EricaMorabitoResume.pdf";
import Strengths from "../components/Strengths";
import { Col, Container, Row } from "react-bootstrap";

const titleVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 2 },
  },
};

function About() {
  return (
    <Container fluid id="about">
      <Row>
        {/* Left Side */}
        <Col xs={12} sm={12} md={6} lg={true} className="centered-column my-3">
          <a href="https://github.com/ericaemorabito" target="_blank">
            <motion.img
              id="home-pic"
              className="profile-pic"
              src={image}
              alt="Erica Morabito"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -15,
                x: -15,
                transition: { duration: 0.3, type: "spring" },
              }}
            />
          </a>
        </Col>

        {/* Right Side */}
        <Col xs={12} sm={12} md={6} lg={true} className="centered-column my-3">
          <motion.h2
            className="title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="subtitle"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 1 }}
          >
            Skills
          </motion.p>
          <motion.p
            className="text"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3, duration: 1 }}
          >
            Experience transforming designs into front-end code, working with
            back-end code to integrate UI components with API and databases,
            building high-quality, scalable web applications with best
            practices, and developing modern, responsive, and
            cross-browser-compatible websites.
          </motion.p>
          <a
            href={Resume}
            download="Erica_Morabito_Resume"
            rel="noreferrere"
            target="_blank"
          >
            <motion.button
              className="button-17"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              transition={{
                delay: 1.7,
                duration: 1,
                scale: { delay: 0 },
              }}
            >
              Download Resume
            </motion.button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default About;
