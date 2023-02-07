import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../elements/button/Button';
import Main from '../../layouts/main/Main';
import InputGroup from '../../elements/input-group/InputGroup';
import RoomsTable from '../../elements/roomstable/RoomsTable';

import styles from './style.module.css';

import {SearchInputClearing} from '../../useeffects/SearchInputClearing';

function PlayLudo() {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [host, setHost] = useState('');

  const [player, setPlayer] = useState('');
  const [password2, setPassword2] = useState('');
  const [roomId, setRoomId] = useState('');

  const [roomNameSearch, setRoomNameSearch] = useState('room name');
  const [hostSearch, setHostSearch] = useState('host name');
  // eslint-disable-next-line no-unused-vars
  const [apiError, setApiError] = useState('');

  const AddPlayer = async (name, isKing, tempID) => {
    const url = `http://localhost:6407/ludoplayers`;
    try {
      await axios
        .post(url, {
          isHost: isKing,
          playerName: name,
          roomID: tempID,
          crossdomain: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
          } /* ,
          proxy: {
            host: process.env.AUTH_MYSQL_HOST,
            port: process.env.AXIOS_PORT
          } */,
        })
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('player added');
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleSubmitAddRoom = async (event) => {
    event.preventDefault();

    try {
      const url = `http://localhost:6407/ludorooms`;

      const result = await axios.post(url, {
        roomName,
        pswd: password,
        hostName: host,
        crossdomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        } /* ,
        proxy: {
          host: process.env.AUTH_MYSQL_HOST,
          port: process.env.AXIOS_PORT
        } */,
      });
      AddPlayer(host, 1, result.data.ID);
      // navigate(`/newroom/`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleSubmitJoinRoom = async (event) => {
    event.preventDefault();

    try {
      const url = `http://localhost:6407/ludorooms/:${roomId}`;
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
        console.log(result);
        if (result.data.password === password) {
          // eslint-disable-next-line no-console
          console.log('joined');
          AddPlayer(event, player, 0, roomId);
          navigate(`/newroom/`);
        } else {
          // eslint-disable-next-line no-console
          console.log('rejected');
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleHostChange = (event) => {
    setHost(event.target.value);
  };
  const handleRoomIdChange = (event) => {
    setRoomId(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };

  const handleRoomNameSearchChange = (event) => {
    setRoomNameSearch(event.target.value);
  };

  const handleHostSearchChange = (event) => {
    setHostSearch(event.target.value);
  };
  

  return (
    <>
      <Main>
        <div className={styles.formCointainer}>
          <div className={styles.formCreateRoom}>
            <h1>Create room</h1>
            <form className="form" onSubmit={handleSubmitAddRoom}>
              <InputGroup
                id="roomName"
                type="text"
                label="Room name"
                handleChange={handleRoomNameChange}
                inputValue={roomName}
              />
              <InputGroup
                id="password"
                type="password"
                label="Password"
                handleChange={handlePasswordChange}
                inputValue={password}
              />
              <InputGroup
                id="host"
                type="text"
                label="Host name"
                handleChange={handleHostChange}
                value={host}
                inputValue={host}
              />
              <Button btnType="submit">Create Room</Button>
            </form>
          </div>
          <div className={styles.formJoinById}>
            <h1>Join by ID</h1>
            <form className="form" onSubmit={handleSubmitJoinRoom}>
              <InputGroup
                id="roomId"
                type="text"
                label="Room ID"
                handleChange={handleRoomIdChange}
                inputValue={roomId}
              />
              <InputGroup
                id="password2"
                type="password"
                label="Password"
                handleChange={handlePassword2Change}
                inputValue={password2}
              />
              <InputGroup
                id="player"
                type="text"
                label="Your name"
                handleChange={handlePlayerChange}
                inputValue={player}
              />
              <Button btnType="submit">Join Room</Button>
            </form>
          </div>
        </div>
        {apiError && <p>{apiError}</p>}
        <div className={styles.roomsSection}>
          <div className={styles.searchRooms}>
            <h1>Rooms list</h1>
            <form className={styles.formRooms}>
              <span className={styles.spanClass}> Search by</span>
              <InputGroup
                id="roomNameSearch"
                type="text"
                label=""
                handleChange={handleRoomNameSearchChange}
                inputValue={roomNameSearch}
              />

              <InputGroup
                id="hostSearch"
                type="text"
                label=""
                handleChange={handleHostSearchChange}
                inputValue={hostSearch}
              />
            </form>
            {apiError && <p>{apiError}</p>}
          </div>{' '}
          {/* formRooms */}
          <div className={styles.roomsTable} /> {/* roomsTable */}
        </div>{' '}
        {/* roomsSection */}
        <RoomsTable />
        
        {apiError && <p>{apiError}</p>}
      </Main>
      <SearchInputClearing />
    </>
  );
}

export default PlayLudo;
