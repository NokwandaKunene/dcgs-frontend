import { Link } from 'react-router-dom';
import './Dashboard.css';

function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Track your career journey & get AI guidance</p>
      </div>

      <div className="dashboard-grid">
        {/* 1. OCR Scan Card (Primary Action) */}
        <div className="dashboard-card primary">
          <div className="card-icon">📷</div>
          <h3>Scan Matric Results</h3>
          <p>Use OCR to extract marks & calculate APS automatically</p>
          <Link to="/student/scan" className="btn-card">
            Scan Now
          </Link>
        </div>

        {/* 2. Recommendations */}
        <div className="dashboard-card">
          <div className="card-icon">🎯</div>
          <h3>University Matches</h3>
          <p>View AI-powered course & university recommendations</p>
          <Link to="/student/recommendations" className="btn-card-outline">
            View Matches
          </Link>
        </div>

        {/* 3. Career Assessment */}
        <div className="dashboard-card">
          <div className="card-icon">🧠</div>
          <h3>Career Assessment</h3>
          <p>Evaluate skills, personality & interests</p>
          <Link to="/student/assessment" className="btn-card-outline">
            Start Assessment
          </Link>
        </div>

        {/* 4. AI Counsellor */}
        <div className="dashboard-card">
          <div className="card-icon">💬</div>
          <h3>AI Counsellor</h3>
          <p>24/7 multilingual chat support</p>
          <Link to="/student/chat" className="btn-card-outline">
            Chat Now
          </Link>
        </div>

        {/* 5. Portfolio Builder */}
        <div className="dashboard-card">
          <div className="card-icon">📋</div>
          <h3>Portfolio Builder</h3>
          <p>Create CVs & LinkedIn profiles</p>
          <Link to="/student/portfolio" className="btn-card-outline">
            Build CV
          </Link>
        </div>

        {/* 6. Progress Tracker */}
        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Progress Tracker</h3>
          <p>Monitor milestones & application deadlines</p>
          <Link to="/student/progress" className="btn-card-outline">
            View Progress
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;