import styles from '../styles/Message.module.css'

export const Message = ({ messageInfo }) => {
    return (
      <div className={styles.messageContainer}>
        <span className={styles.userName}>{messageInfo.userName}</span>
        <div className={styles.messageText}>
          {messageInfo.message}
        </div>
      </div>
    );
  };

