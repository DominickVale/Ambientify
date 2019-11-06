/**
 * TODO
 * 
 * 
 * Setup redux skeleton
 * Add Channels container 
 * Add channel component
 * Add channel load, play/stop button and volume slider to channel component
 * Work on functionality of channels first.
 * channels must be able to:
 * load a sound given a string
 * play the sound
 * stop the sound
 * change the volume
 * 
 * DEADLINE: 11/8/2019
 */

import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from './src/constants'
import registerScreens from './src/navigation'
import { MAIN_SCREEN, SIDE_MENU } from './src/navigation/screens'

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {

  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'menu',
        left: {
          component: {
            name: SIDE_MENU,
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
                      name: MAIN_SCREEN,
                      id: 'main',
                      options: {
                        topBar: {
                          title: {
                            text: 'Ambientify'
                          }
                        }
                      }
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