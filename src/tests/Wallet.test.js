import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Wallet', () => {
  function login() {
    const mockEmail = 'user@test.com';
    const mockPassword = '123456';
    userEvent.type(screen.getByTestId('email-input'), mockEmail);
    userEvent.type(screen.getByTestId('password-input'), mockPassword);
    userEvent.click(screen.getByTestId('login-button'));
  }

  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
    login();
  });

  test('renderiza os elementos do header  corretamente', () => {
    const email = screen.getByTestId('email-field');
    const total = screen.getByTestId('total-field');
    const headerCurrency = screen.getByTestId('header-currency-field');
    expect(email).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(headerCurrency).toBeInTheDocument();
  });
});
