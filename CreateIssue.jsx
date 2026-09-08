import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateIssue({ onAddIssue }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Bug');
  const [priority, setPriority] = useState('Medium');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddIssue({ title, description, type, priority });
    navigate('/issues');
  };

  return (
    <div className="create-issue">
      <h2>Create New Issue</h2>
      <form onSubmit={handleSubmit}>
        <label>Issue Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Issue Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Improvement">Improvement</option>
          <option value="Documentation">Documentation</option>
        </select>

        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Create Issue</button>
      </form>
    </div>
  );
}

export default CreateIssue;
