import React from 'react';
import './App.scss';
import ChatList from './components/ChatLIst/ChatList';
import Chat from './components/Chat/Chat';
import messagesService from './services/message.service';


const App = () => {

  messagesService.getConversationsList();

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
