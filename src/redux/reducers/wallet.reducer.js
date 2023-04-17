import {
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
} from '../actions/fetch.action';
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDIT_TRIGGER,
  newExpensesState,
} from '../actions/wallet.action';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  errorMessage: '',
  editingId: 'not_editing',
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
      currencies: payload ?? state.currencies,
      errorMessage: '',
    };
  case REQUEST_FAILED:
    return {
      ...state,
      isFetching: false,
      errorMessage: payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== payload.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: newExpensesState([...state.expenses], payload),
    };
  case EDIT_TRIGGER:
    return {
      ...state,
      editingId: payload.id !== undefined ? payload.id : 'not_editing',
    };
  default:
    return state;
  }
};

export default walletReducer;
