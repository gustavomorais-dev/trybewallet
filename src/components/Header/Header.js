import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailState } = this.props;
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
          0
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
});

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
