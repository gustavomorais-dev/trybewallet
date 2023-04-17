import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { deleteExpense, editTrigger } from '../../redux/actions/wallet.action';

class Table extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    const { dispatch } = this.props;
    dispatch(editTrigger({
      id,
    }));
  }

  handleDelete(id) {
    const { dispatch } = this.props;
    dispatch(deleteExpense({
      id,
    }));
  }

  render() {
    const { expenses } = this.props;

    return (
      <table className="table-container">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((row) => (
              <tr key={ row.id }>
                <td>{ row.description }</td>
                <td>{ row.tag }</td>
                <td>{ row.method }</td>
                <td>{ `${row.value}.00` }</td>
                <td>{ row.exchangeRates[row.currency].name }</td>
                <td>{ parseFloat(row.exchangeRates[row.currency].ask).toFixed(2) }</td>
                <td>
                  {
                    (
                      parseFloat(row.exchangeRates[row.currency].ask * (+row.value))
                    ).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <Button
                    label="Editar"
                    testid="edit-btn"
                    onClick={ () => this.handleEdit(row.id) }
                  />
                  <Button
                    label="Excluir"
                    testid="delete-btn"
                    onClick={ () => this.handleDelete(row.id) }
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    {},
  ).isRequired,
};

export default connect(mapStateToProps)(Table);
