import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from '../reducers';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
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