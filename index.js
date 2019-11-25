/**
 * TODO
 * 
 * Add settings
 * Start adding basic ui components
 * Start styling said components
 * Add some animations with lottie
 * Refactor and clean code
 */
import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import configureStore from './src/store';

const { store, persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);