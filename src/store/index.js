import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['channels']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunk,];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

export default () => {
  const store = compose(applyMiddleware(...middlewares))(createStore)(persistedReducer);
  return {
    store, persistor: persistStore(store)
  };
};