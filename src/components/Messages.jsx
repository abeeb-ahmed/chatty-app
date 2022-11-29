import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import Input from "./Input";
import Message from "./Message";
import Navbar from "./Navbar";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data.messages);
    });
    return () => {
      unsub();
    };
  }, []);

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
