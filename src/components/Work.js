import soloTravel from "../images/soloTravel.png";
import "./styles/work.css";
import { motion, AnimatePresence } from "framer-motion";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 1, type: "spring" },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    y: -500
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 1 },
  },
  hover: {
    scale: 1.1,
  },
};

function Work() {
  return (
    <div id="about">
      <motion.h2
        className="title text-center mt-5"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        My Work
      </motion.h2>
      <motion.p
        className="subtitle text-center"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Check out my recent projects
      </motion.p>

        {/* Each Project Row */}
        <motion.div className="row work-row"
        variants={projectVariants}
        initial="hidden"
        animate="visible"
        >
          {/* Project Tite and Description  */}
          <div className="col-4 col-sm m-3 project-card">
              <h3 className="project-title">Project Title</h3>
              <p className="text">This is the description</p>
          </div>
          {/* Project Image */}
          <motion.div className="col-4 col-sm m-3" 
          variants={projectVariants}
            whileHover="hover">
            <img
              className="project-picture"
              src={soloTravel}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
          {/* Project Links */}
          <div className="col-4 col-sm m-3 project-card">
            <p>Github</p>
            <p>Deployed</p>
          </div>
        </motion.div>

    </div>
  );
}

export default Work;
