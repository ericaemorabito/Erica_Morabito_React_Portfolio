import "./styles/strengths.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Strengths() {
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  
  const animation = useAnimation();

  useEffect(() => {
    // When the element is in view
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
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
        opacity: 0,
        transition: {
          delay: 0.2,
          duration: 1,
          bounce: 0.3,
          type: "spring",
        },
      });
    }
    console.log("use effect hook in view", inView);
  }, [inView]);

  return (
    <motion.div id="strengths" ref={ref} animate={animation}>
      <h1 className="text-center mt-5">Strengths</h1>
      <p className="subtitle text-center">What I bring to the team</p>

      {/* Problem Solving Row */}
      <div className="row h-25 w-100">
        <div className="col-3">
          <div className="strengths-box">Problem Solving</div>
        </div>
        <div className="col-8 d-flex align-items-center">
          <ul>
            <li className="strengths-list">things things things</li>
            <li className="strengths-list">things things things</li>
          </ul>
        </div>
      </div>

      {/* Creativity Row */}
      <div className="row mt-5 h-25 w-100">
        {/* Strength's Label Box */}
        <div className="col-3">
          <div className="strengths-box">Creativity & Blah Blah</div>
        </div>
        {/* Strength's related skills */}
        <div className="col-8 d-flex align-items-center">
          <ul>
            <li className="strengths-list">things things things</li>
            <li className="strengths-list">things things things</li>
          </ul>
        </div>
      </div>

      {/* Communication & Teamwork Row */}
      <div className="row mt-5 mb-5 h-25 w-100">
        {/* Strength's Label Box */}
        <div className="col-3">
          <div className="strengths-box">Communication & Teamwork</div>
        </div>
        {/* Strength's related skills */}
        <div className="col-8 d-flex align-items-center">
          <ul>
            <li className="strengths-list">things things things</li>
            <li className="strengths-list">things things things</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Strengths;
