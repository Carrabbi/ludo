import React from 'react';
import Router from './Router';
// /import sqlite3 from 'sqlite3';

import './App.css';

/* eslint-disable camelcase */
/*
const query_c =
  'CREATE TABLE IF NOT EXISTS rooms (id INTEGER PRIMARY KEY NOT NULL, roomname TEXT, password TEXT, host INTEGER)';

try {
  const db = new sqlite3.Database('.ludo.db');

  db.run(query_c);

  console.log('Connected to the in-memory SQlite database.');
} catch (error) {
  console.log(error);
}
*/
function App() {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}

export default App;
