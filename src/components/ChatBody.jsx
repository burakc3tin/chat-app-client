import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages,lastMessageRef,typingStatus,socket  }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);
  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };
  
 
  return (
    <>
    <div>
      <header className="chat__mainHeader">
        <p id='headerTitleName'>BurakChat</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          AYRIL
        </button>
      </header>
      <marquee id="activeUsersMarque"  > {users.map((user) => (
            <span key={user.socketID} className='activeUsersSpan1'><span className='activeUsersSpan2'>🟢</span>{user.userName}</span>
          ))}</marquee>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">Sen</p>
              <div  className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      <div ref={lastMessageRef} />
      <div className="message__status">
        <p>{typingStatus}</p>
        </div>
         
      </div>
      
            
      </div>
    </>
  );
};

export default ChatBody;