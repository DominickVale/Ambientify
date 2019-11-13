/**
 * int NUMBER_OF_CHANNELS: 
 *  Number of channels to be rendered at startup. Will be implemented in the settings to be stored in AsyncStorage
 * 
 * obj SOUND_FILES:
 *  List of sound files with their final name as key. The key must be equal to the actual file name.
 *  The sounds will be loaded by accessing SOUND_FILES[CATEGORY][Key].
 * 
 *  Underscores ( _ ) will be translated to spaces. E.g    Test_Sound   ->  Test Sound
 */

export const NUMBER_OF_CHANNELS = 12;

export const SOUND_FILES = {
  NATURE: {
    wind: require('#ambientify-sounds/wind.ogg'),
  },
  ANIMALS: {
    crows: require('#ambientify-sounds/crows.ogg'),
    wildlife: require('#ambientify-sounds/wildlife.ogg')
  },
  DARK: {
    dark: require('#ambientify-sounds/dark.ogg'),
  },
  MUSIC: {
    test_sound1: require('#ambientify-sounds/test_sound1.ogg'),
    test_sound2: require('#ambientify-sounds/test_sound2.ogg'),
  }

}
export const COLORS = {
  icons: '#5B636C',
  headerBG: '#06191F',
  headerFore: '#EBDAD0',
}