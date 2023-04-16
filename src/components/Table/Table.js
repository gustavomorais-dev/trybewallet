import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

class Table extends Component {
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
                  <button onClick={ () => handleEdit(row.id) }>Editar</button>
                  <button onClick={ () => handleDelete(row.id) }>Excluir</button>
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
  expenses: PropTypes.arrayOf(
    {},
  ).isRequired,
};

export default connect(mapStateToProps)(Table);
