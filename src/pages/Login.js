import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">E-mail:</label>
        <input
          id="email-input"
          data-testid="email-input"
        />
        <label htmlFor="password-input">Senha:</label>
        <input
          id="password-input"
          data-testid="password-input"
        />
        <button>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
