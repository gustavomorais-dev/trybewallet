import {
  fetchCurrencies,
  requestFailed,
  requestStarted,
  requestSuccessful,
} from './fetch.action';

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDIT_TRIGGER = 'EDIT_TRIGGER';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export function newExpense(payload) {
  const { id, currency, value, description, method, tag } = payload;
  return (dispatch) => {
    dispatch(requestStarted());
    fetchCurrencies()
      .then((data) => {
        const exchangeRates = {};
        Object.keys(data).forEach((element) => {
          exchangeRates[element] = data[element];
        });
        const expenseToBeAdded = {
          id,
          value,
          description,
          currency,
          method,
          tag,
          exchangeRates,
        };
        dispatch(requestSuccessful());
        dispatch(addExpense(expenseToBeAdded));
      })
      .catch((error) => {
        dispatch(requestFailed(error));
        console.log(error);
      });
  };
}

export function getCurrencies() {
  return (dispatch) => {
    dispatch(requestStarted());
    fetchCurrencies()
      .then((data) => {
        const currenciesArray = Object.keys(data);
        const currencies = currenciesArray.filter(
          (currency) => currency !== 'USDT',
        );
        dispatch(requestSuccessful(currencies));
      })
      .catch((error) => dispatch(requestFailed(error)));
  };
}

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export function newExpensesState(expenses, payload) {
  const newExpenseState = expenses.map((expense) => {
    if (expense.id === payload.editingId) {
      return {
        id: payload.editingId,
        value: payload.value,
        description: payload.description,
        currency: payload.currency,
        method: payload.method,
        tag: payload.tag,
        exchangeRates: expense.exchangeRates,
      };
    }
    return expense;
  });
  return newExpenseState;
}

export const editTrigger = (payload) => ({
  type: EDIT_TRIGGER,
  payload,
});
