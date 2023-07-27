import { configureStore } from '@reduxjs/toolkit'
import repositoriSlice from './repositories/repositoriSlice'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from 'redux';
 
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  repositoriReducer: repositoriSlice
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})