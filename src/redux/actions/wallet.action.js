import {
  fetchCurrencies,
  requestFailed,
  requestStarted,
  requestSuccessful,
} from './fetch.action';

export const ADD_EXPENSE = 'ADD_EXPENSE';

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
