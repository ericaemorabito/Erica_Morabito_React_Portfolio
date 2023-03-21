import "./styles/skills.css";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function Skills() {
  return (
    <Container id="skills">
      <motion.h1
        className="text-center mt-5 title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.5, duration: 1 }}
      >
        Skills
      </motion.h1>
      <motion.Row
        className="row skills-row"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.9, duration: 1 }}
      >
        <Col xs={12} sm={12} md={6} lg={true} className="col-sm">
          <div className="skills-card">
            <h2 className="skill-title text-center">Front End</h2>
            <div className="bulleted-skills">
              <ul className="skills-list">
                <li>
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                  HTML5
                </li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>JavaScript</li>
              </ul>
              <ul className="skills-list">
                <li>React.js</li>
                <li>Webpack</li>
                <li>REST API</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={6} lg={true} className="col-sm">
          <div className="skills-card">
            <h2 className="skill-title text-center">Back End</h2>
            <div className="bulleted-skills">
              <ul className="skills-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL </li>
                <li>Sequelize</li>
              </ul>
              <ul className="skills-list">
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </Col>
      </motion.Row>
    </Container>
  );
}

export default Skills;
