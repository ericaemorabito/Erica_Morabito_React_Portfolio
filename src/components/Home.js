import image from "../images/profilepic.jpeg";
import "./styles/home.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Strengths from "./Strengths";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },

};

const imageVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 2 }
  }
};

function Home() {
  return (
    <div id="home" key={'home'}>
      <div className="row w-100 h-100">
        <div className="col-sm">
          <motion.h1
            id="home-name"
            className="mb-3"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1 }}
          >
            Erica Morabito
          </motion.h1>
          <motion.p
            id="job-title"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 1 }}
          >
            Front-End Web Developer
          </motion.p>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3, duration: 1 }}
            className="text-center"
          >
            I'm a front-end engineer building remakarable online experiences.
            I love to build projects and solve problems to improve the lives of others.  
          </motion.p>
          <a href="/Erica_Morabito_React_Portfolio/work">
            <motion.button
            transition={{ delay: 1.7, duration: 1 }}
              className="button-17 mt-3"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              View my work
            </motion.button>
          </a>
        </div>
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
        {/* <Strengths /> */}
      </div>
    </div>
  );
}

export default Home;
