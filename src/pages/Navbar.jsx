import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img
          src="your-logo-url.png" // Replace with the actual logo URL
          alt="Task Manager Logo"
          style={styles.logo}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = ''; // Fallback to text if logo fails
            e.target.alt = 'Task Manager'; // Fallback text
          }}
        />
        <span style={styles.logoText}>Task Manager</span>
      </div>
      <div style={styles.navLinks}>
        <a href="/login" style={styles.link}>Login</a>
        <a href="/signup" style={styles.link}>Sign Up</a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  },
};

export default Navbar;
