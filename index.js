/**
 * TODO
 * 
 * Add basic presets screen implementation
 * Fix loadSound action and LoadButton component.
 * Add load sound screen and basic implementation.
 * 
 * DEADLINE: 11/14/2019
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import configureStore from './src/store';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);