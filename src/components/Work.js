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
        {/* Project Title and Description */}
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
            <p>Github</p>
            <p>Deployed</p>
          </motion.div>
        </div>

        {/* Image */}
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

      {/* THE REST DOWN HERE */}

      {/* Project Row */}
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Project Title and Description */}
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
            <p>Github</p>
            <p>Deployed</p>
          </motion.div>
        </div>

        {/* Image */}
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
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Project Title and Description */}
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
            <p>Github</p>
            <p>Deployed</p>
          </motion.div>
        </div>

        {/* Image */}
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
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Project Title and Description */}
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
            <p>Github</p>
            <p>Deployed</p>
          </motion.div>
        </div>

        {/* Image */}
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
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Project Title and Description */}
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
            <p>Github</p>
            <p>Deployed</p>
          </motion.div>
        </div>

        {/* Image */}
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
      <motion.div
        className="row work-row"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportLeave="exit"
      >
        {/* Project Title and Description */}
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
            <p>Github</p>
            <p>Deployed</p>
          </motion.div>
        </div>

        {/* Image */}
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

    </div>
  );
}

export default Work;
