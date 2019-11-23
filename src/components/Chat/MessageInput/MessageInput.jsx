import React from 'react';
import './MessageInput.scss';


const MessageInput = () => {
  const [message, setMessage] = React.useState('');

  const sendMessage = () => {
    // TODO implement message service
    console.log(message);

    // TODO on success;
    if (message) {
      setMessage('');
    }
  };

  return (
    <div className="MessageInput">
      <input
        className="MessageInput-input"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        className="MessageInput-submit"
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};
export default MessageInput;
