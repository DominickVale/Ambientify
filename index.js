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

import Mixer from './src/screens/Mixer';
import { COLORS } from './src/constants'


Navigation.registerComponent('ambientify.main', () => Mixer);

Navigation.events().registerAppLaunchedListener(async () => {

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'ambientify.main',
            options: {
              topBar: {
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