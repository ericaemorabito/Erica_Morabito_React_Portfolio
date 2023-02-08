import soloTravel from '../images/soloTravel.png';
import './styles/work.css';
import { motion } from 'framer-motion';

function Work(){

  return (
    <div id="about">
      <h2 className="section-title text-center mt-5">My Work</h2>
      <p className="subtitle text-center">check out my recent projects</p>
      
      <div id="work-row" className="row mt-5">
        <motion.div className="col-sm m-3"
          whileHover={{ scale: 1.1 }}>
          <img className='project-picture' src={soloTravel} alt="screenshot of soloTraveler website home page"></img>
          <motion.div className='hidden-project-card'
          whileHover={{ opacity: 1 }}>
            <h3 className='project-title'>Project Title</h3>
            <p className='text'>This is the description</p>
            <p>Github & Deployed</p>
          </motion.div> 
        </motion.div>

        <div className="col-sm m-3">
          <img className='project-picture' src={soloTravel} alt="screenshot of soloTraveler website home page"></img>
        </div>

        <div className="col-sm m-3">
          <img className='project-picture' src={soloTravel} alt="screenshot of soloTraveler website home page"></img>
        </div>

        <div className="col-sm m-3">
          <img className='project-picture' src={soloTravel} alt="screenshot of soloTraveler website home page"></img>
        </div>

        <div className="col-sm m-3">
          <img className='project-picture' src={soloTravel} alt="screenshot of soloTraveler website home page"></img>
        </div>

        <div className="col-sm m-3">
          <img className='project-picture' src={soloTravel} alt="screenshot of soloTraveler website home page"></img>
        </div>

      </div>
    </div>
  )
};

export default Work;