import React, { useState } from 'react';
import IssueCard from './IssueCard';

function IssueList({ issues, onUpdateStatus }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(search.toLowerCase()) ||
                          issue.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || issue.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="issue-list-container">
      <h2>Issue List</h2>
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by title or description..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className="issues">
        {filteredIssues.map(issue => (
          <IssueCard key={issue.id} issue={issue} onUpdateStatus={onUpdateStatus} />
        ))}
      </div>
    </div>
  );
}

export default IssueList;
