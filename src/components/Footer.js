import "./styles/footer.css";
import Resume from "../resume/EricaMorabitoResume.pdf";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <Row id="footer">
      <Col id="footer-links" className="col">
        <a
          href="https://github.com/ericaemorabito"
          target="_blank"
          className="text-dark"
        >
          <li>Github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/erica-morabito/"
          target="_blank"
          className="text-dark"
        >
          <li>LinkedIn</li>
        </a>
        <a href={Resume} target="_blank" className="text-dark">
          <li>Resume</li>
        </a>
        <a
          href="mailto:ericaemorabito@gmail.com"
          target="_blank"
          className="text-dark"
        >
          <li>Email</li>
        </a>
      </Col>
    </Row>
  );
}

export default Footer;
