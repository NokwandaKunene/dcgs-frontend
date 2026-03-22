import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Select your role to continue</p>
        
        <div className="role-selection">
          <Link to="/student/dashboard" className="role-card">
            <div className="role-icon">🎓</div>
            <h3>Student</h3>
            <p>Access your dashboard and scan results</p>
          </Link>
          
          <Link to="/admin/dashboard" className="role-card">
            <div className="role-icon">⚙️</div>
            <h3>Administrator</h3>
            <p>Manage users and system settings</p>
          </Link>
        </div>
        
        <div className="auth-divider">
          <span>or</span>
        </div>
        
        <form className="auth-form">
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email address" 
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="form-input"
              required
            />
          </div>
          
          <button type="submit" className="btn-register">
            Sign In with Email
          </button>
        </form>
        
        <p className="auth-footer">
          Don't have an account? <Link to="/register" className="link">Sign up</Link>
        </p>
        
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Login;