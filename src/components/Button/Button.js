import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { testid, label, type, disabled, onClick } = this.props;
    return (
      <button
        data-testid={ testid }
        type={ type }
        disabled={ disabled }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  testid: '',
  onClick: () => {},
};

Button.propTypes = {
  testid: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
