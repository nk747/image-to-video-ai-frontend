import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // ✅ App with capital A
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);fix: correct App import in index.js
