import "./styles/footer.css";
import Resume from '../resume/EricaMorabitoResume.pdf'

function Footer() {
  return (
    <div id="footer" className="row">
      <div id="footer-links" className="col">
        <a href="https://github.com/ericaemorabito" target="_blank" className="text-dark"><li>Github</li></a>
        <a href="https://www.linkedin.com/in/erica-morabito/" target="_blank" className="text-dark"><li>LinkedIn</li></a>
        <a href={Resume}  target="_blank" className="text-dark"><li>Resume</li></a>
        <a href="mailto:ericaemorabito@gmail.com" target="_blank" className="text-dark"><li>Email</li></a>
      </div>
    </div>
  );
}

export default Footer;
