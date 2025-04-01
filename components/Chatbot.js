import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Chatbot.module.css';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = { sender: 'User', text: message };
    setChat([...chat, userMessage]);
    setMessage('');
    
    try {
      const res = await axios.post('/api/chatbot', { message });
      const reply = { sender: 'Bot', text: res.data.reply };
      setChat(prev => [...prev, reply]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className={styles.chatbot}>
      <div className={styles.chatWindow}>
        {chat.map((msg, index) => (
          <div key={index} className={msg.sender === 'User' ? styles.userMessage : styles.botMessage}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me about my skills..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
