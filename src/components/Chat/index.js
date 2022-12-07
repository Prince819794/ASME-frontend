import React from "react";
import chat from "../../assets/chat.png";
import "./chat.css";

const Chat = () => {
  return (
    <div className="chat-cont">
      <img src={chat} alt="chat-icon" className="chat-icon"/>
    </div>
  );
};

export default Chat;
