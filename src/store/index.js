import { configureStore } from '@reduxjs/toolkit';
import ListReducer from '../reducer';

const store = configureStore({
  reducer: {
    list: ListReducer
  },
});

export default store;