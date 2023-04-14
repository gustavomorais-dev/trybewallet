import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { fetchCurrencies } from '../../redux/actions/fetch.action';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      currency: 'USD',
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { currencyOptions } = this.props;
    const { currency, value, description, method, tag } = this.state;

    const paymentMethodsOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyOptions: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
