import React from 'react';

function Dashboard({ issues }) {
  const total = issues.length;
  const open = issues.filter(i => i.status === 'Open').length;
  const inProgress = issues.filter(i => i.status === 'In Progress').length;
  const closed = issues.filter(i => i.status === 'Closed').length;

  return (
    <div className="dashboard">
      <h2>Project Dashboard</h2>
      <div className="stats-cards">
        <div className="card">Total Issues: {total}</div>
        <div className="card">Open: {open}</div>
        <div className="card">In Progress: {inProgress}</div>
        <div className="card">Closed: {closed}</div>
      </div>
    </div>
  );
}

export default Dashboard;
