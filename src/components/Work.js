// Images
import soloTravel from "../images/soloTravel.png";
import tasteMakers from "../images/tastemakers.png";
import ecommerce from "../images/ecommerce.png";
import bites from "../images/bites.png";
import weather from '../images/weather.png';
import codeQuiz from '../images/codeQuiz.png';
import code from '../images/code.jpeg';
// Styling
import "./styles/work.css";
import { motion } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";

// Framer Motion Variants
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
const projectVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.9, duration: 1 },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: { duration: 1 },
  },
};

// Projects
const projectData = [
  {
    id: 1,
    title: "Solo Traveler",
    description:
      "signup, save trips, and chat to other travelers",
    github: "https://github.com/ericaemorabito/Solo_Traveler",
    deployed: "https://solo.herokuapp.com",
    image: soloTravel,
  },
  {
    id: 2,
    title: "E-Commerce Site",
    description: "browse products and purchase products",
    github: "https://github.com/ericaemorabito/E-commerce.git",
    deployed: "https://udemyproshoptutorial.herokuapp.com/",
    image: ecommerce,
  },
  {
    id: 3,
    title: "Tastemakers",
    description: "find and save recipes based on your preferences",
    github: "https://github.com/ericaemorabito/taste_makers.git",
    deployed: "https://ericaemorabito.github.io/taste_makers/",
    image: tasteMakers,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "search and save cities to view the weather",
    github: "https://github.com/ericaemorabito/Weather_Dashboard",
    deployed: "https://ericaemorabito.github.io/Weather_Dashboard/",
    image: weather,
  },
  {
    id: 5,
    title: "Code Quiz",
    description: "quiz your HTML and CSS skills",
    github: "https://github.com/ericaemorabito/Code_Quiz",
    deployed: "https://ericaemorabito.github.io/Code_Quiz/",
    image: codeQuiz,
  },
  {
    id: 6,
    title: "E-commerce API",
    description: "Express and MySQL back end for an e-commerce site",
    github: "https://github.com/ericaemorabito/E-Commerce_Back_End",
    deployed: "",
    image: code,
  },
  // {
  //   id: 8,
  //   title: "Social Media API",
  //   description: "review site for restaurant workers",
  //   github: "https://github.com/ericaemorabito/Bites.git",
  //   deployed: "",
  //   image: bites,
  // }
];

function Work() {
  return (
    <Container fluid id="work">
      {/* Title and Subtitle */}
      <motion.h2
        className="title text-center mt-5"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 1 }}
      >
        My Work
      </motion.h2>
      <motion.p
        className="subtitle text-center"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7, duration: 1 }}
      >
        recent projects focused on MERN stack
      </motion.p>

{/* Project Rows */}
      {projectData.map((project) => (
        <motion.Row
          className="row work-row"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportLeave="exit"
        >
          {/* Description */}
          <Col xs={12} sm={12} md={6} lg={true} className="m-3 project-card">
            <motion.div
              className="project-card-text"
              variant={projectVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -15,
                x: -15,
                transition: { duration: 0.3, type: "spring" },
              }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="text text-center">
                {project.description}
              </p>
              <a
                className="project-link"
                href={project.github}
                target="_blank"
              >
                Github
              </a>
              <a
                className="project-link"
                href={project.deployed}
                target="_blank"
              >
                Deployed
              </a>
            </motion.div>
          </Col>
          {/* Image */}
          <Col xs={12} sm={12} md={6} lg={true} className="m-3 project-card">
            <motion.div
              className="project-card-image"
              variant={projectVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -15,
                x: -15,
                transition: { duration: 0.3, type: "spring" },
              }}
            >
              <a href={project.deployed} target="_blank">
                <img
                  className="project-picture"
                  src={project.image}
                  alt="screenshot of soloTraveler website home page"
                ></img>
              </a>
            </motion.div>
          </Col>
        </motion.Row>
      ))}

    </Container>
  );
}

export default Work;
