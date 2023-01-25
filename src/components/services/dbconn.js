import { createConnection } from 'mysql';

const conn = createConnection({
  host: process.env.auth_localhost,
  user: process.env.auth_root,
  password: process.env.auth_password,
});

conn.connect((err) => {
  if (err) {
    console.log('Error occurred', err);
  } else {
    // Create database
    console.log('Connected to MySQL Server');
    const query = 'CREATE DATABASE ludo_rooms';
    conn.query(query, (err, result) => {
      if (err) {
        err;
      }
      console.log('New database created');
    });
  }
});
