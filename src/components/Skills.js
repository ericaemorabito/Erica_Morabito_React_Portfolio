import "./styles/skills.css";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const skillVariants = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 1 },
  },
  hover: {
    scale: 1.1,
  },
  exit: {
    opacity: 0,
  },
};

function Skills() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    // When the element is in view
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          bounce: 0.3,
          type: "spring",
        },
      });
    }
    // When the element is not in view. Inital state
    if (!inView) {
      animation.start({
        x: -500,
        transition: {
          duration: 1,
          bounce: 0.3,
          type: "spring",
        },
      });
    }
    console.log("use effect hook in view", inView);
  }, [inView]);

  return (
    <div id="skills">
      <h1 className="text-center mt-5 title">Skills</h1>
      <motion.div className="row skills-row" ref={ref} animate={animation}>
        <Col className="col-sm">
          <div className="skills-card">
            <h2 className="skill-title text-center">Front End</h2>
            <div className="bulleted-skills">
              <ul className="skills-list">
                <li>HTML5</li>
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

        <Col className="col-sm">
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
                <li>Rest API</li>
              </ul>
            </div>
          </div>
        </Col>
      </motion.div>
    </div>
  );
}

export default Skills;
