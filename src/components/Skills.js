import "./styles/skills.css";
import { Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <div>
      <h1 className="text-center mt-5 title">Skills</h1>
      <Row className="skills-row">
        <Col className="col-sm">
          <div className="skills-card">
            <h2 className="skill-title text-center">Front End</h2>
            <div className="bulleted-skills">
              <ul className="skills-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>JavaScript</li>
              </ul>
              <ul className="skills-list">
                <li>React.js</li>
                <li>Webpack</li>
                <li>REST API</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col className="col-sm">
          <div className="skills-card">
          <h2 className="skill-title text-center">Back End</h2>
            <div className="bulleted-skills">
              <ul className="skills-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL </li>
                <li>Sequelize</li>
              </ul>
              <ul className="skills-list">
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>Rest API</li>
              </ul>
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
