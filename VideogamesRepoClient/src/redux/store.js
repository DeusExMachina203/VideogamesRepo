import { configureStore } from '@reduxjs/toolkit';
import gamesSlice from './games/gamesSlice.js';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer:{
	games: gamesSlice,
  },
  middleware: [thunkMiddleware],
});
