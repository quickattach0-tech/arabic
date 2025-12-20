import { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Optional: Add a simple bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Hello!', sender: 'bot' }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <div style={{ margin: '20px', maxWidth: '400px' }}>
      <h3>Chat</h3>
      <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', padding: '10px', marginBottom: '10px' }}>
        {messages.map((msg, i) => (
          <p key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        style={{ width: '300px' }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

// Then insert <Chat /> into the component for the /state route (or wherever Element.jsx is used).
export default Chat; // Or integrate it directly.