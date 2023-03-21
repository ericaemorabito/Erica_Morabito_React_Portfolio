import React from "react";
import { motion } from "framer-motion";

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

const Project = (project, key) => {
  return (
    <>
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
            <h3 className="project-title">{project.title}</h3>
            <p className="text text-center">
            {project.description}
            </p>
            <a
              className="project-link"
              // href={`${project.github}`} 
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
              src={project.image}
              alt="screenshot of soloTraveler website home page"
            ></img>
          </motion.div>
        </div>
      </motion.div>
    </>
 
  )
}

export default Project;