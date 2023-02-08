import image from "../images/profilepic.jpeg";
import './styles/home.css';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 2 }
  }
}

const buttonVariants = {
  hover: {
      scale: 1.1,
    }
  }

  const imageVariants = {
    hidden: {
      scale: 1
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.5}
    }
  }

function Home() {
  return (
    <motion.div id="home"
    variants={fadeInVariants}
            initial="hidden"
            animate="visible">
      <div className="row w-100">

        <div className="col-sm">
          <motion.h1 id="name">
            Erica Morabito
            </motion.h1>

          <motion.p id="job-title">
            Front-End Web Developer</motion.p>

          <motion.p>
            I'm a team player who wants to work to solve problems and improve
            the lives of others.
          </motion.p>

        <a href="/work">
        <motion.button className="button-17"
          variants={buttonVariants}
          whileHover="hover">
            view my work
          </motion.button>
        </a>
          
        </div>


        <div className="col-sm">
          <motion.img id="home-pic" className="profile-pic" src={image} alt="Erica Morabito" 
          variants={imageVariants}
          initial="hidden"
          whileHover="hover"
          />
        </div>

        
      </div>
    </motion.div>
  );
}

export default Home;
