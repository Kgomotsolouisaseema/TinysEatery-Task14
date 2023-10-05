
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  // Add other reducers here
});

export default rootReducer;
