import data from './data/data.json';

export const getRoomsDetails = () => data;

export const setRoomDetails = (roomname, psw, h) => {
  const room = {
    name: roomname,
    password: psw,
    host: h,
  };

  const jsonString = JSON.stringify(room);

  console.log(jsonString);
};

// ipv4 servera 192.168.100.9
export const createRoom = (roomname, password, host) => {
  setRoomDetails(roomname, password, host);
};
