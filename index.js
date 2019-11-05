/**
 * TODO
 * Implement all 3 screens (Main, Presets, SideDrawer)
 * Setup basic Navigation
 * Setup redux skeleton
 * 
 *
 */

import { Navigation } from "react-native-navigation";
import App from './App';


Navigation.registerComponent('ambientify.mainscreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'ambientify.mainscreen'
      }
    }
  });
});