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
  crows: require('Ambientify/assets/sounds/crows.ogg'),
  dark: require('Ambientify/assets/sounds/dark.ogg'),
  wind: require('Ambientify/assets/sounds/wind.ogg'),
  wildlife: require('Ambientify/assets/sounds/wildlife.ogg')
}
export const COLORS = {
  icons: '#5B636C',
  topBarBG: '#06191F',
  topBarFore: '#EBDAD0',
}