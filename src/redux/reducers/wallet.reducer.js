import { LOGIN } from '../actions/user.action';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'XD':
    return {
      email: payload.email,
    };
  default:
    return state;
  }
};

export default walletReducer;
