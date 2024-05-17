import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersistentNav from './pages/PersistentNav/PersistentNav';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <Router>
      <PersistentNav />
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
