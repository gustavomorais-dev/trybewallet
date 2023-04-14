export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(data) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((responseData) => {
        const currenciesArray = Object.keys(responseData);
        const currencies = currenciesArray.filter(
          (currency) => currency !== 'USDT',
        );
        dispatch(requestSuccessful(currencies));
      })
      .catch((error) => dispatch(requestFailed(error)));
  };
}
