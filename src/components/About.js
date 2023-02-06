import "./styles/about.css";
import image from "../images/profilepic.jpeg";

function About() {
  return (
    <div id="about">
      <div className="row w-100">
        
        {/* Left Side */}
        <div className="col-sm">
          <img className="profile-pic" src={image} alt="Erica Morabito" />
        </div>

        {/* Right Side */}
        <div className="col-sm">
          <h2 className="section-title">About Me</h2>
          <p className="subtitle">My introduction</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserun mollit anim id est laborum.
          </p>
          <button className="button-17">Download Resume</button>
        </div>

      </div>
    </div>
  );
}
export default About;