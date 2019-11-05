/**
 * int NUMBER_OF_CHANNELS: 
 *  Number of channels to be rendered at startup. Will be implemented in the settings to be stored in AsyncStorage
 * 
 * obj SOUND_FILES:
 *  List of sound files with their final name as key. The key must be equal to the actual file name.
 *  The sounds will be loaded by accessing SOUND_FILES[id].
 */

export const NUMBER_OF_CHANNELS = 12;

export const SOUND_FILES = {
  WIND: require('../assets/sounds/wind.ogg'),
  WILDLIFE: require('../assets/sounds/wildlife.ogg'),
  CROWS: require('../assets/sounds/crows.ogg'),
  DARK: require('../assets/sounds/dark.ogg'),
};