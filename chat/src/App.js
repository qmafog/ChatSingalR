import { WaitingRoom } from './components/WaitingRoom';
import { useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Chat } from './components/Chat';
import './App.css';

function App() {
  const [connection, setConnection] = useState(null);
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const joinChat = async (userName, chatRoom) => {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7237/chat")
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveMessage", (userName, message) => {
      setMessages((messages) => [...messages, { userName, message }]);
    });

    try {
      await connection.start();
      await connection.invoke("JoinChat", {userName, chatRoom});

      setConnection(connection);
      setChatRoom(chatRoom);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = (message) => {
      connection.invoke("SendMessage", message);


  };

  const closeChat = async () => {
    await connection.stop();
    setMessages([]);
    setConnection(null);
  }
  return (
    <div className="App">
      {connection ? <Chat messages={messages} 
                          chatRoom={chatRoom} 
                          sendMessage={sendMessage} 
                          closeChat={closeChat}/> : <WaitingRoom 
                                            joinChat={joinChat} />}
    </div>
  );
}

export default App;
