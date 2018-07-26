import { combineReducers } from 'redux';
import UserReducer from './reducerUsers.js';

const allReducers = combineReducers({
  users: UserReducer,
  playlists: 'something'
})