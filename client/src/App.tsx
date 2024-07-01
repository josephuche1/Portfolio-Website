import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import LinkTree from './pages/LinkTree/LinkTree';
import ProjectShow from './pages/ProjectShow/ProjectShow';
import Form from './pages/Form/Form';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/linktree" element={<LinkTree />} />
        <Route path="/projects/:id" element={<ProjectShow />} />
        <Route path="/addProject" element={<Form />} />
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
