import './styles/skills.css'
import { Row, Col } from 'react-bootstrap';

function Skills(){
  return(
    <div>
      <h1 className='text-center mt-5'>Skills</h1>
      <Row className='skills-row'>

        <Col className='col-sm'>
          <div className='skills-box'>
            <h2>Front End</h2>
            <ul id='skills-list'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Framer-Motion</li>
              <li>Sass</li>
              <li>JQuery</li>
            </ul>
          </div>
        </Col>

        <Col className='col-sm'>
        <div className='skills-box'>
            <h2>Front End</h2>
            <ul id='skills-list'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL </li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>Rest API</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default Skills;