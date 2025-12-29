import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  const baseUrl = (import.meta.env.BASE_URL as string) ?? '';
  
  return (
    <Router basename={baseUrl}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
