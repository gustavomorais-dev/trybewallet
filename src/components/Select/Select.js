import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { testid, label, value, onChange, options, name } = this.props;
    return (
      <div>
        <label htmlFor={ testid }>{label}</label>
        <select
          data-testid={ testid }
          value={ value }
          onChange={ onChange }
          name={ name }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Select.defaultProps = {
  testid: '',
  label: '',
};

Select.propTypes = {
  testid: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Select;
