import image from "../images/profilepic.jpeg";
import './styles/home.css'

function Home() {
  return (
    <div id="home-page" className="container">
      <div className="row">
        {/* Text on landing page */}
        <div className="col-sm">
          <h1 id="name">Erica Morabito</h1>
          <p id="job-title">Front-End Web Developer</p>
          <p>
            I'm a team player who wants to work to solve problems and improve
            the lives of others.
          </p>
          <button className="button-17">view my work</button>
        </div>

        {/* Image next to the text on landing page */}
        <div className="col-sm">
          <img className="profile-pic" src={image} alt="Erica Morabito" />
        </div>
      </div>
    </div>
  );
}

export default Home;
