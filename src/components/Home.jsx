import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = ({ socket }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('userName', userName);
      //sends the username and socket ID to the Node.js server
      socket.emit('newUser', { userName, socketID: socket.id });
      navigate('/chat');
    };
  return (
    <div className='homeMain'> 
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="homeHeaderText">BurakChat</h2>
      <label className='userNameText' htmlFor="username">Kullanıcı Adınızı Giriniz</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">GİRİŞ</button>
    </form>
    </div>
  );
};

export default Home;

