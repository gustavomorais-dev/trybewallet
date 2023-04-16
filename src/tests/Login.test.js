import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Tela de login', () => {
  let inputEmail;
  let inputPassword;
  let buttonLogin;
  let history;
  const mockEmail = 'user@test.com';

  beforeEach(() => {
    const render = renderWithRouterAndRedux(<App />);
    history = render.history;
    inputEmail = screen.getByTestId('email-input');
    inputPassword = screen.getByTestId('password-input');
    buttonLogin = screen.getByTestId('login-button');
  });

  test('renderiza os elementos corretamente', () => {
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
  });

  test('permite digitar nos inputs de email e senha', async () => {
    userEvent.type(inputEmail, mockEmail);
    userEvent.type(inputPassword, '123456');

    expect(inputEmail).toHaveValue(mockEmail);
    expect(inputPassword).toHaveValue('123456');
  });

  test('redireciona para /carteira ao clicar no botão de login', async () => {
    userEvent.type(inputEmail, mockEmail);
    userEvent.type(inputPassword, '123456');
    userEvent.click(buttonLogin);

    expect(history.location.pathname).toBe('/carteira');
  });
});
