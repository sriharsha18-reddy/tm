// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    history.push('/login'); // Redirect to login on logout
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Add task management UI here */}
    </div>
  );
};

export default Dashboard;
