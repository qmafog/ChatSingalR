import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; 
import styles from '../styles/Chat.module.css'; 

export const Chat = ({ messages, chatRoom, sendMessage, closeChat }) => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef();

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, [messages]);

  const onSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <h2>{chatRoom}</h2>
        <button
          aria-label="Close chat"
          onClick={closeChat}
          className={styles.closeButton}
        >
          <FaTimes />
        </button>
      </div>

      <div className={styles.messages}>
        {messages.map((messageInfo, index) => (
          <div className={styles.message} key={index}>
            <span className={styles.userName}>{messageInfo.userName}: </span>
            <span className={styles.messageContent}>{messageInfo.message}</span>
          </div>
        ))}
        <span ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message..."
          className={styles.input}
        />
        <button onClick={onSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};
