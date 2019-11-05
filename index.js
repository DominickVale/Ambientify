/**
 * TODO
 * Implement all 3 screens (Main, Presets, SideDrawer)
 * Setup basic Navigation
 * Setup redux skeleton
 * 
 *
 */

import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons'

import App from './App';
import { COLORS } from './src/constants'


Navigation.registerComponent('ambientify.mainscreen', () => App);

Navigation.events().registerAppLaunchedListener(async () => {

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'ambientify.mainscreen',
            options: {
              topBar: {
                title: {
                  text: 'Ambientify'
                },
                leftButtons: [
                  {
                    id: 'ham',
                    icon: await Icon.getImageSource("menu", 30, COLORS.icons),
                    scale: 2
                  }
                ],
              }
            }
          }
        }]
      }
    }
  });
});