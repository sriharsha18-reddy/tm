import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'; // Assuming Navbar is in the 'pages' folder
import Signup from './pages/Signup'; // Import Signup page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} /> {/* Add the Signup route */}
      </Routes>
    </Router>
  );
}

export default App;
