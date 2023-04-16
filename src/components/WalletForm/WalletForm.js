import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import { getCurrencies, newExpense } from '../../redux/actions/wallet.action';
import './WalletForm.css';

const currencyDefaultValue = 'USD';
const valueDefaultValue = '';
const descriptionDefaultValue = '';
const methodDefaultValue = 'Dinheiro';
const tagDefaultValue = 'Alimentação';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      currency: currencyDefaultValue,
      value: valueDefaultValue,
      description: descriptionDefaultValue,
      method: methodDefaultValue,
      tag: tagDefaultValue,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleAddExpense(event) {
    event.preventDefault();
    const { dispatch, expenses } = this.props;
    dispatch(newExpense({ ...this.state, id: (expenses.length) }));
    this.setState({
      currency: currencyDefaultValue,
      value: valueDefaultValue,
      description: descriptionDefaultValue,
      method: methodDefaultValue,
      tag: tagDefaultValue,
    });
  }

  render() {
    const { currencyOptions } = this.props;
    const { currency, value, description, method, tag } = this.state;

    const paymentMethodsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form onSubmit={ this.handleAddExpense }>
        <Input
          testid="value-input"
          type="number"
          label="Valor"
          name="value"
          value={ value }
          placeholder="100"
          onChange={ this.handleChange }
        />
        <Select
          testid="currency-input"
          label="Moeda"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
          options={ currencyOptions }
        />
        <Select
          testid="method-input"
          label="Método de pagamento"
          name="method"
          value={ method }
          onChange={ this.handleChange }
          options={ paymentMethodsOptions }
        />
        <Select
          testid="tag-input"
          label="Categoria"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
          options={ tagOptions }
        />
        <Input
          testid="description-input"
          type="text"
          label="Descrição"
          name="description"
          value={ description }
          placeholder=""
          onChange={ this.handleChange }
        />
        <Button
          type="submit"
          label="Adicionar despesa"
          testid=""
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    {},
  ).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
