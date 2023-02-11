import "./styles/strengths.css";

function Strengths() {
  return (
    <div id="strengths">
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
    </div>
  );
}

export default Strengths;
