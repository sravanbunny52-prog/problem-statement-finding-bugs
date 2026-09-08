import React from 'react';

function IssueCard({ issue, onUpdateStatus }) {
  return (
    <div className="issue-card">
      <h3>#{issue.id} {issue.title}</h3>
      <p>{issue.description}</p>
      <p><strong>Type:</strong> {issue.type}</p>
      <p><strong>Priority:</strong> {issue.priority}</p>
      <p><strong>Status:</strong> {issue.status}</p>
      <select 
        value={issue.status} 
        onChange={(e) => onUpdateStatus(issue.id, e.target.value)}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  );
}

export default IssueCard;
