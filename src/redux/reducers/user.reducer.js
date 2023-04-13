import { LOGIN } from '../actions/user.action';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return {
      email: payload.email,
    };
  default:
    return state;
  }
};

export default userReducer;
