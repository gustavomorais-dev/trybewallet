import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { testid, label, type, disabled } = this.props;
    return (
      <button
        data-testid={ testid }
        type={ type }
        disabled={ disabled }
      >
        { label }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  testid: '',
};

Button.propTypes = {
  testid: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
