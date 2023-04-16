import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const { expenses } = this.props;
    return expenses.reduce((total, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];
      return total + value * ask;
    }, 0);
  }

  render() {
    const { emailState } = this.props;
    const total = this.getTotal();
    return (
      <header>
        <span
          data-testid="email-field"
        >
          { emailState }
        </span>
        <span
          data-testid="total-field"
        >
          { total.toFixed(2) }
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    {},
  ).isRequired,
};

export default connect(mapStateToProps)(Header);
