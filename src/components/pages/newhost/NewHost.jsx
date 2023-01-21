import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../elements/button/Button';
import Main from '../../layouts/main/Main';
import InputGroup from '../../elements/input-group/InputGroup';
import { setRoomDetails, getRoomsDetails } from '../../services/db';

import styles from './style.module.css';

function NewHost() {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [host, setHost] = useState('');
  const [apiError, setApiError] = useState('');

  const createdRooms = getRoomsDetails();

  const handleSubmit = (event) => {
    event.preventDefault();

    // @TODO Walidacja danych

    setRoomDetails(roomName, password, host)
      .then(() => {
        navigate('/newroom');
      })
      .catch((error) => {
        setApiError(error.message);
      });
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(createdRooms);
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

  return (
    <Main>
      <div className={styles.newhost}>
        <div className={styles.form1}>
          <h1> Create room</h1>
          <form className="form" onSubmit={handleSubmit}>
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
              inputValue={host}
            />
          </form>
          <form className="form" onSubmit={handleSubmit}>
            <Button btnType="submit">Create Room</Button>
            {apiError && <p>{apiError}</p>}
          </form>
        </div>
        <div className={styles.form2}>
          <form className="form" onSubmit={handleSubmit2}>
            <Button btnType="submit">Join Room</Button>
            {apiError && <p>{apiError}</p>}
          </form>
        </div>
      </div>
    </Main>
  );
}

export default NewHost;
