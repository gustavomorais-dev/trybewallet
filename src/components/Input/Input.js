import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  render() {
    const { testid, type, label, name, value, placeholder, onChange, error } = this.props;

    return (
      <div className="input-container">
        {label && <label htmlFor={ name }>{label}</label>}
        <input
          data-testid={ testid }
          type={ type }
          name={ name }
          value={ value }
          placeholder={ placeholder }
          onChange={ onChange }
        />
        {error && <div className="error">{error}</div>}
      </div>
    );
  }
}

Input.defaultProps = {
  placeholder: '',
  label: '',
  error: '',
  testid: '',
};

Input.propTypes = {
  testid: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
