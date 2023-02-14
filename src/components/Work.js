import soloTravel from "../images/soloTravel.png";
import "./styles/work.css";
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

function Work() {
  return (
    <div id="about">
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
        Check out my recent projects
      </motion.p>

      {/* Project Row */}
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Solo Traveler */}
        <div className="col-6 col-sm m-3 project-card">
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
            <h3 className="project-title">Solo Traveler</h3>
            <p className="text text-center">
              provides solo travelers a place to connect and plan upcoming trips
            </p>
            <a
              className="project-link"
              href="https://github.com/ericaemorabito/Solo_Traveler"
              target="_blank"
            >
              Github
            </a>
            <a
              className="project-link"
              href="https://solo.herokuapp.com/"
              target="_blank"
            >
              Deployed
            </a>
          </motion.div>
        </div>
        <div className="col-6 col-sm m-3 project-card">
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
            <img
              className="project-picture"
              src={soloTravel}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
        </div>
      </motion.div>

      {/* Bites */}
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        <div className="col-6 col-sm m-3 project-card">
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
            <h3 className="project-title">Bites</h3>
            <p className="text">review site for restaurant workers</p>
            <a
              className="project-link"
              href="https://github.com/ericaemorabito/Bites.git"
              target="_blank"
            >
              Github
            </a>
            <a className="project-link" href="" target="_blank">
              Deployed
            </a>
          </motion.div>
        </div>
        <div className="col-6 col-sm m-3 project-card">
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
            <img
              className="project-picture"
              src={soloTravel}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
        </div>
      </motion.div>

      {/* Tastemakers */}
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Tastemakers */}
        <div className="col-6 col-sm m-3 project-card">
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
            <h3 className="project-title">Tastemakers</h3>
            <p className="text">recipe finder app</p>
            <a
              className="project-link"
              href="https://github.com/ericaemorabito/taste_makers.git"
              target="_blank"
            >
              Github
            </a>
            <a className="project-link" href="" target="_blank">
              Deployed
            </a>
          </motion.div>
        </div>
        <div className="col-6 col-sm m-3 project-card">
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
            <img
              className="project-picture"
              src={soloTravel}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Row */}
      {/* <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        <div className="col-6 col-sm m-3 project-card">
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
            <h3 className="project-title">Project Title</h3>
            <p className="text">This is the description</p>
            <a
              className="project-link"
              href="https://github.com/ericaemorabito/Bites.git"
              target="_blank"
            >
              Github
            </a>
            <a className="project-link" href="" target="_blank">
              Deployed
            </a>
          </motion.div>
        </div>
        <div className="col-6 col-sm m-3 project-card">
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
            <img
              className="project-picture"
              src={soloTravel}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
        </div>
      </motion.div> */}

      {/* Project Row */}
      {/* <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        <div className="col-6 col-sm m-3 project-card">
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
            <h3 className="project-title">Project Title</h3>
            <p className="text">This is the description</p>
            <a
              className="project-link"
              href="https://github.com/ericaemorabito/Bites.git"
              target="_blank"
            >
              Github
            </a>
            <a className="project-link" href="" target="_blank">
              Deployed
            </a>
          </motion.div>
        </div>
        <div className="col-6 col-sm m-3 project-card">
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
            <img
              className="project-picture"
              src={soloTravel}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
        </div>
      </motion.div> */}

    </div>
  );
}

export default Work;
