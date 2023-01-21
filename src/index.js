import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

// eslint-disable-next-line
console.log('Hello from index!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
