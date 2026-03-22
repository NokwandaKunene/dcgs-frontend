import { Link } from 'react-router-dom';
import './Recommendations.css';

function Recommendations() {
  return (
    <div className="rec-container">
      <div className="rec-header">
        <Link to="/student/dashboard" className="back-btn">← Back</Link>
        <h1>University Recommendations</h1>
        <p>Based on your APS score of 32</p>
      </div>

      <div className="rec-list">
        <div className="rec-card">
          <div className="rec-header-card">
            <h3>University of Witwatersrand</h3>
            <span className="match-score">95% Match</span>
          </div>
          <p><strong>Recommended:</strong> Bachelor of Science</p>
          <p className="reqs">Requirements: APS 30+, Maths 70%</p>
          <button className="btn-apply">View Details</button>
        </div>

        <div className="rec-card">
          <div className="rec-header-card">
            <h3>University of Pretoria</h3>
            <span className="match-score">88% Match</span>
          </div>
          <p><strong>Recommended:</strong> BCom Management Sciences</p>
          <p className="reqs">Requirements: APS 28+, Maths 60%</p>
          <button className="btn-apply">View Details</button>
        </div>

        <div className="rec-card">
          <div className="rec-header-card">
            <h3>University of Cape Town</h3>
            <span className="match-score">82% Match</span>
          </div>
          <p><strong>Recommended:</strong> BA Social Sciences</p>
          <p className="reqs">Requirements: APS 30+, English 70%</p>
          <button className="btn-apply">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;