import { useState } from "react";
import styles from "../styles/WaitingRoom.module.css";

export const WaitingRoom = ({ joinChat }) => {
  const [userName, setUserName] = useState("");
  const [chatRoom, setChatRoom] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    joinChat(userName, chatRoom);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2 className={styles.heading}>Realtime Chat</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="userName" className={styles.label}>Username</label>
        <input
          id="userName"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          name="userName"
          placeholder="Enter your username"
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="chatRoom" className={styles.label}>Chat Room</label>
        <input
          id="chatRoom"
          type="text"
          onChange={(e) => setChatRoom(e.target.value)}
          name="chatRoom"
          placeholder="Enter the name of the chat room"
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.submitButton}>Join Chat</button>
    </form>
  );
};
