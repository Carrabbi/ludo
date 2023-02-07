import React from 'react';
import ReactDOM from 'react-dom';

import colors  from './colors.module.css';

// eslint-disable-next-line import/extensions
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
