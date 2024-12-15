// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>
      {/* Add profile editing functionality here */}
    </div>
  );
};

export default Profile;
