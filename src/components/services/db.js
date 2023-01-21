import data from './data/data.json';


export const createRoom = (roomname,password, host) =>{
  setRoomDetails(roomname,password, host);
//muszę zapisać do jsona, żeby nie musiec z bazą się bawić na razie

};


export const getRoomsDetails = () => {
  return data;
}


export const setRoomDetails = (roomname, psw, h) =>{
  const room = {
    name: roomname,
    password: psw,
    host: h
  };

  const jsonString = JSON.stringify(room);
  
  console.log(jsonString);

  
}