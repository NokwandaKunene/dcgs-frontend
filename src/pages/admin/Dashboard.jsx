import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-header">
        <h1>Administrator Dashboard</h1>
        <p>Manage system users and monitor analytics</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">0</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">0</div>
          <div className="stat-label">Results Processed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">0</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">26</div>
          <div className="stat-label">Universities</div>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <div className="card-icon">👥</div>
          <h3>User Management</h3>
          <p>Manage student accounts and permissions</p>
          <Link to="/admin/users" className="btn-card-outline">
            Manage Users
          </Link>
        </div>

        <div className="admin-card">
          <div className="card-icon">📊</div>
          <h3>Analytics Dashboard</h3>
          <p>View system usage and engagement metrics</p>
          <Link to="/admin/analytics" className="btn-card-outline">
            View Analytics
          </Link>
        </div>

        <div className="admin-card">
          <div className="card-icon">🎓</div>
          <h3>University Database</h3>
          <p>Manage university and course information</p>
          <Link to="/admin/universities" className="btn-card-outline">
            Manage Universities
          </Link>
        </div>

        <div className="admin-card">
          <div className="card-icon">⚙️</div>
          <h3>System Settings</h3>
          <p>Configure OCR settings and AI parameters</p>
          <Link to="/admin/settings" className="btn-card-outline">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
