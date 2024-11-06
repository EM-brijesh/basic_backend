import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#399CCF', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test-scholarships" element={<TestScholarships />} />
          <Route path="/results" element={<Results />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

// Navbar Component
function Navbar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '400px', marginRight: '400px', justifyContent: 'space-between' , border: '2px Solid Black', borderRadius: '8px' , padding: '10px', paddingTop: '4px' }}>
      <div style={{ display: 'flex', flexGrow: 1, gap: '30px', fontSize: '20px', marginTop: '20px', cursor: 'pointer' }}>
        <Link to="/">Brand Name</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/test-scholarships">Test Scholarships</Link>
        <Link to="/results">Results</Link>
        <Link to="/study-materials">Study Materials</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        <button>Talk To Us</button>
        <button>Login</button>
      </div>
    </div>
  );
}

// Placeholder Components for Routes
function Home() {
  return <div>Home Page</div>;
}

function Courses() {
  return <div>Courses Page</div>;
}

function TestScholarships() {
  return <div>Test Scholarships Page</div>;
}

function Results() {
  return <div>Results Page</div>;
}

function StudyMaterials() {
  return <div>Study Materials Page</div>;
}

function AboutUs() {
  return <div>About Us Page</div>;
}

export default App;
