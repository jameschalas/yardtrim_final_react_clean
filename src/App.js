import Gallery from './components/Gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services'; // or wherever your Services.jsx is

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/lawn-care" element={<Services />} />
        <Route path="/tree-removal" element={<Services />} />
        <Route path="/yard-cleanup" element={<Services />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <div>
      {/* other sections */}
      <Gallery />
      {/* more sections */}
    </div>
  );
}
