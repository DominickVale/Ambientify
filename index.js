/**
 * 
 * Thank you for checking out my repository. This is my first serious project ever.
 * Feel free to leave any kind of feedback, as i would really appreciate it...
 * 
 */
import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import configureStore from './src/store';
import App from './App';
import './src/translations/index'

const { store, persistor } = configureStore();

/**
 * TODO:
 * After this move to private repository and add premium version implementation
 * Add sounds and sound category images
 */
const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);