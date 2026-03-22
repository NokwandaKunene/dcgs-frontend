import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '15px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DCGS</div>
      <div>
        <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
        <Link to="/login" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Login</Link>
        <Link to="/student/dashboard" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Student</Link>
        <Link to="/admin/dashboard" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;