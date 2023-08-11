import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import { isValidEmail, isValidPassword } from '../../validations/userValidations';
import { login } from '../../redux/actions/user.action';
import Button from '../../components/Button/Button';
import './Login.css';
import AppTitle from '../../components/AppTitle/AppTitle';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleLogin(event) {
    event.preventDefault();

    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(login({
      email,
    }));

    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-page">
        <AppTitle />
        <div className="login-container">
          <div className="login-content">
            <h1>Login</h1>
            <p>Insira quaisquer dados 😁</p>
            <form onSubmit={ this.handleLogin }>
              <Input
                testid="email-input"
                type="email"
                label="Email"
                name="email"
                value={ email }
                placeholder="example@example.com"
                onChange={ this.handleInputChange }
                error={
                  email.length > 0
                  && (!isValidEmail(email) ? 'Digite um e-mail válido' : null)
                }
              />
              <Input
                testid="password-input"
                type="password"
                label="Password"
                name="password"
                value={ password }
                placeholder="*************"
                onChange={ this.handleInputChange }
                error={
                  password.length > 0 && !isValidPassword(password)
                    ? 'Mínimo de 6 caracteres'
                    : null
                }
              />
              <Button
                testid="login-button"
                type="submit"
                label="Entrar"
                disabled={ !(isValidEmail(email) && isValidPassword(password)) }
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
