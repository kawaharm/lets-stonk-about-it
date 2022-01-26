// Imports
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';

// Components
import Tweet from './components/Tweet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Tweet />} />
      </Routes>
    </Router>
  );
}

export default App;