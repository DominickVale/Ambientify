/**
 * TODO
 * 
 * Finish basic presets screen implementation
 * Add and implement load/save preset functionality
 * 
 * Fix loadsound dispatch = too long
 * Refactor and clean code
 * 
 * DEADLINE: 11/15/2019
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