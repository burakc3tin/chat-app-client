import React, { useState, useEffect } from 'react';
import '../TopBar.css';
const ChatTop = ({ socket }) => {
    const [users, setUsers] = useState([]);

    //Aktif kullanıcıları alıyoruz
    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
      }, [socket, users]);
    
  return (
    <div id="content">
    <div id="top">
    <span>BurakChat</span>
    </div>
    <hr />
   
    <marquee > {users.map((user) => (
          <span key={user.socketID} className='activeUsersSpan1'>
            <span className='activeUsersSpan2'>🟢</span>{user.userName}</span>
        ))}</marquee>
      <hr />
   

     
      

  </div>
  );
};

export default ChatTop;