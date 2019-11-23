import React from 'react';
import './App.scss';
import ChatList from './components/ChatLIst/ChatList';
import Chat from './components/Chat/Chat';
import AuthService from './services/auth.service';

const App = () => {
  const auth = new AuthService();

  return (<div className="App">
      <div className="App-container">
        <div className="App-list">
          <ChatList/>
        </div>
        <div className="App-messages">
          <Chat/>
        </div>
      </div>
    </div>
  );
};
export default App;
