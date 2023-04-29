import React, { useState, useEffect } from 'react';

const ChatAllPage = ({ socket }) => {
    const [users, setUsers] = useState([]);

    //Aktif kullanıcıları alıyoruz
    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
      }, [socket, users]);
    
  return (
    <div id="body">
    <div id="top">
    <span>BurakChat</span>
    </div>
    <hr />
   
    <marquee > {users.map((user) => (
          <span key={user.socketID} className='activeUsersSpan1'>
            <span className='activeUsersSpan2'>🟢</span>{user.userName}</span>
        ))}</marquee>
      <hr />
      <div ></div>

       <div id="footer">
      <div class="input-group mb-3">
<input type="text" class="form-control" 
placeholder="Mesaj Yazın..."
 aria-label="Mesaj Yazın..." aria-describedby="basic-addon2"/>
<div class="input-group-append">
  <button class="btn btn-success" type="button">GÖNDER</button>
</div>

        
      </div>

      </div>
      

  </div>
  );
};

export default ChatAllPage;