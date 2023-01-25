import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/button/Button';
import Main from '../../layouts/main/Main';

function Room() {
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <Main>
      <p>Hi from New Room</p>
      <form className="form" onSubmit={handleSubmit}>
        <Button btnType="submit">Create Game</Button>
      </form>
    </Main>
  );
}

export default Room;
