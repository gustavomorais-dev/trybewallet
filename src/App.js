import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ Login } />
      </div>
    );
  }
}

export default App;
