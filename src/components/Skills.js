import "./styles/skills.css";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const titleVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0
  },
};

function Skills() {
  // const { ref, inView } = useInView({
  //   threshold: 0.5
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   // When the element is in view
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         duration: 1,
  //         bounce: 0.3,
  //         type: "spring",
  //       },
  //     });
  //   }
  //   // When the element is not in view. Inital state
  //   if (!inView) {
  //     animation.start({
  //       opacity: 0,
  //       x: -500,
  //       transition: {
  //         delay: 0.3,
  //         duration: 1,
  //         bounce: 0.3,
  //         type: "spring",
  //       },
  //     });
  //   }
  //   console.log("use effect hook in view", inView);
  // }, [inView]);

  return (
    // <motion.div id="skills" ref={ref} animate={animation}>
      <div id="skills">
      <motion.h1 className="text-center mt-5 title"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      transition= {{ delay: 0.5, duration: 1 }}
      >
        Skills
      </motion.h1>
      <motion.div className="row skills-row"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      transition= {{ delay: 0.9, duration: 1 }}
      >

        
        <Col className="col-sm">
          <div className="skills-card">
            <h2 className="skill-title text-center">Front End</h2>
            <div className="bulleted-skills">
              <ul className="skills-list">
                <li><FontAwesomeIcon icon="fa-solid fa-check" />HTML5</li>
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
    // </motion.div>
  );
}

export default Skills;
