export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function requestStarted() {
  return { type: REQUEST_STARTED };
}

export function requestSuccessful(data) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  };
}

export function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchCurrencies() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}
