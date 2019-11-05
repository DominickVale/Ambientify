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
import SideDrawer from "./src/screens/SideDrawer";


Navigation.registerComponent('ambientify.main', () => Mixer);
Navigation.registerComponent('ambientify.side', () => SideDrawer);

Navigation.events().registerAppLaunchedListener(async () => {

  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'ambientify.side',
            visible: true
          }
        },
        center: {
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
          },
        }
      }
    }
  });
});