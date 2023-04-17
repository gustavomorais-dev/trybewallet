import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import {
  editExpense,
  editTrigger,
  getCurrencies,
  newExpense,
} from '../../redux/actions/wallet.action';

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
      editingId: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.handleEditExpense = this.handleEditExpense.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  componentDidUpdate(prevProps) {
    const { editingId, expenses } = this.props;
    if (editingId !== prevProps.editingId && typeof editingId === 'number') {
      const expense = expenses.find((exp) => exp.id === editingId);
      this.setState({
        currency: expense.currency,
        value: expense.value,
        description: expense.description,
        method: expense.method,
        tag: expense.tag,
        editingId,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleAddExpense(event) {
    event.preventDefault();
    const { dispatch, expenses } = this.props;
    const id = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 0;
    dispatch(newExpense({ ...this.state, id }));
    this.setState({
      currency: currencyDefaultValue,
      value: valueDefaultValue,
      description: descriptionDefaultValue,
      method: methodDefaultValue,
      tag: tagDefaultValue,
    });
  }

  handleEditExpense(event) {
    event.preventDefault();
    const { dispatch, editingId } = this.props;
    dispatch(editExpense({ ...this.state, editingId }));
    dispatch(editTrigger({ }));
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
    const { currency, value, description, method, tag, editingId } = this.state;

    const paymentMethodsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form
        onSubmit={
          typeof editingId === 'number' ? this.handleEditExpense : this.handleAddExpense
        }
      >
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
          label={
            typeof editingId === 'number' ? 'Editar despesa' : 'Adicionar despesa'
          }
          testid=""
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editingId: state.wallet.editingId,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  expenses: PropTypes.arrayOf(
    {},
  ).isRequired,
  editingId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
