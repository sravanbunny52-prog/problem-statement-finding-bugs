import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import IssueList from './components/IssueList';
import CreateIssue from './components/CreateIssue';
import './App.css';

function App() {
  const [issues, setIssues] = useState([
    {
      id: 101,
      title: "Login button not working",
      description: "Login button does not respond when clicked.",
      type: "Bug",
      priority: "High",
      status: "Open"
    },
    {
      id: 102,
      title: "Add dark mode",
      description: "Implement dark theme toggle across the app.",
      type: "Feature",
      priority: "Medium",
      status: "In Progress"
    },
    {
      id: 103,
      title: "Update project documentation",
      description: "Add setup instructions to README.md.",
      type: "Documentation",
      priority: "Low",
      status: "Closed"
    }
  ]);

  const addIssue = (newIssue) => {
    setIssues([...issues, { id: Date.now(), ...newIssue, status: "Open" }]);
  };

  const updateStatus = (id, newStatus) => {
    setIssues(issues.map(issue => issue.id === id ? { ...issue, status: newStatus } : issue));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard issues={issues} />} />
          <Route path="/issues" element={<IssueList issues={issues} onUpdateStatus={updateStatus} />} />
          <Route path="/create" element={<CreateIssue onAddIssue={addIssue} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
