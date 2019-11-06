/**
 * TODO
 * 
 * 
 * Setup redux skeleton
 * Add Channels container
 * Add channel component
 * Add channel load, play/stop button and volume slider to channel component
 *
 */

import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from './src/constants'
import Mixer from './src/screens/Mixer';
import Presets from './src/screens/Presets';
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
                visible: true,
                title: {
                  color: COLORS.topBarFore,
                  alignment: 'center'
                },
                background: {
                  color: COLORS.topBarBG
                },
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