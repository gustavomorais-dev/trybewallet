import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/index.reducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

if (window.Cypress) {
  window.store = store;
}
