import Gallery from './components/Gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services'; // or wherever your Services.jsx is

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<YardTrimWebsite />} />
        <Route path="/lawn-care" element={<YardTrimWebsite />} />
        <Route path="/tree-removal" element={<YardTrimWebsite />} />
        <Route path="/yard-cleanup" element={<YardTrimWebsite />} />
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
