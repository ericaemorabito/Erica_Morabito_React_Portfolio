import "./styles/about.css";
import image from "../images/profilepic.jpeg";
import Skills from "./Skills";
import { motion } from "framer-motion";
import Resume from "../resume/EricaMorabitoResume.pdf";
import Strengths from "../components/Strengths"

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
    <div id="about">
      <div className="row w-100">
        
        {/* Left Side */}
        <div className="col-sm">
          <motion.img
            id="home-pic"
            className="profile-pic"
            src={image}
            alt="Erica Morabito"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
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
            Experience transforming designs into front-end code, 
            working with back-end code to integrate UI components with API and databases,
            building high-quality, scalable web applications with best practices,
            and
            developing modern, responsive, and cross-browser-compatible websites.
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
               delay: 1.7, duration: 1,
               scale: { delay: 0 }
              }}
            >
              Download Resume
            </motion.button>
          </a>
        </div>
      </div>

      <Skills />
      {/* <Strengths /> */}
    </div>
  );
}
export default About;
