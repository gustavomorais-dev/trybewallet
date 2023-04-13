import { combineReducers } from 'redux';
import user from './user.reducer';
import wallet from './wallet.reducer';

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
