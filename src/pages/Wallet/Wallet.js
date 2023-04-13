import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <div>
        TrybeWallet
        { emailState }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
