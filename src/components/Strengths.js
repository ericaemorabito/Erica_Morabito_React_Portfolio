import "./styles/strengths.css";
import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0
  }, 
  exit: {
    opacity: 0
  }
};

function Strengths() {
  return (
    <div id="strengths">
      <motion.h1 className="title text-center mt-5"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      transition= {{ delay: 0.4, duration: 1 }}
      >Experience
      </motion.h1>
      <motion.p className="subtitle text-center"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      transition= {{ delay: 0.6, duration: 1 }}>
        What I bring to the team
      </motion.p>

      {/* Problem Solving Row */}
      <div className="row h-25 w-100 strengths-row">
        {/* Problem Solving */}
        <div className="col-3">
          <motion.div className="strengths-box"
           variants={titleVariants}
           initial="hidden"
           whileInView="visible"
           transition= {{ delay: 0.7, duration: 1 }}>
            Problem Solving & Critical Thinking
            </motion.div>
        </div>
        {/* Creativity */}
        <div className="col-3">
          <motion.div className="strengths-box"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          transition= {{ delay: 0.8, duration: 1 }}>
            Communication & Teamwork
          </motion.div>
        </div>
        {/* Communication & Teamwork */}
        <div className="col-3">
          <motion.div className="strengths-box"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          transition= {{ delay: 0.9, duration: 1 }}>
            Creativity & Adaptability 
            </motion.div>
        </div>
      </div>

    </div>
  );
}

export default Strengths;