// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>
      <div style={styles.card}>
        <p>Welcome back, John Doe!</p>
        <p>Your tasks for today:</p>
        <ul>
          <li>Task 1: Complete report</li>
          <li>Task 2: Attend meeting</li>
          <li>Task 3: Review code</li>
        </ul>
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

export default Dashboard;
