import { combineReducers } from 'redux';

import CalculoReducer from './CalculoReducer';
import UserReducer from './UserReducer';

export default combineReducers(CalculoReducer, UserReducer);