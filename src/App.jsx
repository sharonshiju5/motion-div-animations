import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Animation from './animation';
import Home from './text'; // You can create this as a simple fallback or home component

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/div" element={<Animation />} />
      </Routes>
    </Router>
  );
}

export default App;
