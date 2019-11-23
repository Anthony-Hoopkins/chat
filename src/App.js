import React from 'react';
import './styles/index.scss';
import AuthService from './services/auth-service';


const App = () => {
  AuthService.getToken();

  return (
    <div className="App">
      Hi
    </div>
  );
};
export default App;
