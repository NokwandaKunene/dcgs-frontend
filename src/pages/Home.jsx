import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="logo-section">
          <div className="logo-icon">🎓</div>
          <h1 className="main-title">AI Digital Career Guidance</h1>
          <p className="subtitle">SA University prospectus hub</p>
        </div>
        
        <div className="button-section">
          <Link to="/register" className="btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary">
            Sign In
          </Link>
        </div>
        
        <div className="features-preview">
          <div className="feature-item">
            <span className="feature-icon">📄</span>
            <span>Upload Results</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <span>Get Recommendations</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎓</span>
            <span>Choose University</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;