import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import wordSlice from './slice';

const rootReducer = combineReducers({
  word: wordSlice.reducer,
});

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export default createStore;
