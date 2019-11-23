import React from 'react';
import './App.scss';
import ChatList from './components/ChatLIst/ChatList';
import Chat from './components/Chat/Chat';
import AuthService from './services/auth.service';
import MessageService from './services/message.service';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chatList: Array(9).fill(Math.floor(Math.random() * 100)),
      currentChat: 55,
    };
  }

  handleClick(id) {
    console.log(id);

    this.setState({
      currentChat: id,
    });

    console.log(this.state);
  }

  render() {
      const current = this.state.current;
      const auth = new AuthService();
      const message = new MessageService();

    return (<div className="App">
          <div className="App-container">
            <div className="App-list">
              <ChatList
                  value={current}
                  onClick={(i) => this.handleClick(i)}
              />
            </div>
            <div className="App-messages">
              <Chat/>
            </div>
          </div>
        </div>
    );
  };
}
export default App;
