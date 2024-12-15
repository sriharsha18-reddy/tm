// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'; // Assuming Navbar is in the 'pages' folder
import Signup from './pages/Signup'; // Import Signup page
import Login from './pages/Login';    // Import Login page
import Profile from './pages/Profile'; // Import Profile page
import Dashboard from './pages/Dashboard'; // Import Dashboard page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/login" element={<Login />} />   {/* Login route */}
        <Route path="/profile" element={<Profile />} /> {/* Profile route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;
