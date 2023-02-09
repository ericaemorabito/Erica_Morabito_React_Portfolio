import "./styles/about.css";
import image from "../images/profilepic.jpeg";
import Skills from "./Skills";
import { motion } from "framer-motion";

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

function About() {
  return (
    <div id="about">
      <div className="row w-100">
        {/* Left Side */}
        <div className="col-sm">
          <img className="profile-pic" src={image} alt="Erica Morabito" />
        </div>

        {/* Right Side */}
        <div className="col-sm">
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
            transition={{ delay: 0.9, duration: 1 }}>
            My introduction
          </motion.p>
          <motion.p className="text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3, duration: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserun mollit anim id est laborum.
          </motion.p>
          <motion.button className="button-17"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.7, duration: 1 }}>
            Download Resume
            </motion.button>
        </div>
      </div>

      <Skills />
    </div>
  );
}
export default About;
