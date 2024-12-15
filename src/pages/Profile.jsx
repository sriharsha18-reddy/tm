// src/pages/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      <h2>Profile Page</h2>
      <div style={styles.card}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        {/* You can add more details like address, phone number, etc. */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  card: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    width: '300px',
    textAlign: 'left',
  },
};

export default Profile;
