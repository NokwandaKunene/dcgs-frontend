import { Link } from 'react-router-dom';
import './Auth.css';

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Enter your name, email address and a password</p>
        
        <form className="auth-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Name" 
              className="form-input"
              required
            />
          </div>
          
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
            Register
          </button>
        </form>
        
        <p className="auth-footer">
          Already have an account? <Link to="/login" className="link">Sign in</Link>
        </p>
        
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Register;