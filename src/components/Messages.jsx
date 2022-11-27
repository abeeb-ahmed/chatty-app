import React from "react";
import Input from "./Input";
import Message from "./Message";
import Navbar from "./Navbar";

const Messages = () => {
  return (
    <div className="messages">
      <Navbar />
      <div className="messagesContainer">
        <Message sender={false} />
        <Message sender={false} />
        <Message sender={true} />
        <Message sender={false} />
        <Message sender={true} />
      </div>
      <div className="messagesInput">
        <Input />
      </div>
    </div>
  );
};

export default Messages;
