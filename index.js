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
import Presets from './src/screens/Presets';
import { COLORS } from './src/constants'
import SideDrawer from "./src/screens/SideDrawer";


Navigation.registerComponent('ambientify.main', () => Mixer);
Navigation.registerComponent('ambientify.presets', () => Presets);
Navigation.registerComponent('ambientify.side', () => SideDrawer);

Navigation.events().registerAppLaunchedListener(async () => {

  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'menu',
        left: {
          component: {
            name: 'ambientify.side',
            id: 'side',
            visible: true
          }
        },
        center: {
          stack: {
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
            },
            children: [{
              stack: {
                id: 'appStack',
                children: [
                  {
                    component: {
                      name: 'ambientify.main',
                      id: 'main'
                    }
                  },
                ]
              }
            }]
          }
        }
      }
    }
  });
});