import {
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
} from '../actions/fetch.action';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  errorMessage: '',
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_STARTED:
    return {
      ...state,
      isFetching: true,
      errorMessage: '',
    };

  case REQUEST_SUCCESSFUL:
    return {
      ...state,
      isFetching: false,
      currencies: payload,
      errorMessage: '',
    };

  case REQUEST_FAILED:
    return {
      ...state,
      isFetching: false,
      errorMessage: payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
