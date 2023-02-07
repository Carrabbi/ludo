// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import styles from './style.module.css';

function RoomsTable() {
  const [rooms, setRooms] = useState([]);

  const readRooms = async () => {
    try {
      const url = 'http://localhost:6407/ludorooms';
      await axios(url, {
        crossdomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        } /* ,
        proxy: {
          host: process.env.AUTH_MYSQL_HOST,
          port: process.env.AXIOS_PORT
        } */,
      }).then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.data);
        setRooms(result.data);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    readRooms();
  }, []);

  if (rooms) {
    // eslint-disable-next-line no-console
    console.log(rooms);
  } else {
    // eslint-disable-next-line no-console
    console.log('no data');
  }

  return (
    <table className={styles.myTable}>
      <thead>
        <tr>
          <th>No</th>
          <th>Room name</th>
          <th>Host name</th>
          <th>Capacity</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room, index) => (
          <tr key={room.publicID}>
            <td>{index + 1}</td>
            <td>{room.roomName}</td>
            <td>{room.hostName}</td>
            <td>{room.actualSize}/4</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RoomsTable;
