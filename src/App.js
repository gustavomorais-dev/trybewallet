import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet/Wallet';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/trybewallet/" component={ Login } />
        <Route exact path="/trybewallet/carteira" component={ Wallet } />
      </div>
    );
  }
}

export default App;
