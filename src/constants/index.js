/**
 * int NUMBER_OF_CHANNELS: 
 *  Number of channels to be rendered at startup. Will be implemented in the settings to be stored in AsyncStorage in premium version
 * 
 * obj SOUND_FILES:
 *  List of sound files with their final name as key. The key must be equal to the actual file name.
 *  The sounds will be loaded by accessing SOUND_FILES[CATEGORY][Key].
 * 
 *  Underscores ( _ ) will be translated to spaces. E.g    Test_Sound   ->  Test Sound
 */

export const NUMBER_OF_CHANNELS = 9;


export const CATEGORY_IMAGES = {
  NATURE: require('#ambientify-images/nature.jpg'),
  ANIMALS: require('#ambientify-images/nature.jpg'),
  DARK: require('#ambientify-images/nature.jpg'),
  ENVIRONMENT: require('#ambientify-images/nature.jpg'),
  WEATHER: require('#ambientify-images/nature.jpg'),
  MUSIC: require('#ambientify-images/nature.jpg'),
  CUSTOM: require('#ambientify-images/nature.jpg'),
}


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
  ENVIRONMENT: {
    Lake_Waves_01: require('#ambientify-sounds/Lake_Waves_01.ogg')
  },
  WEATHER: {
    Big_Thunder_Clap: require('#ambientify-sounds/Big_Thunder_Clap.ogg'),
    Thunder_Clap_And_Rumble: require('#ambientify-sounds/Thunder_Clap_And_Rumble.ogg'),
    Light_Rain_01: require('#ambientify-sounds/Light_Rain_01.ogg'),
  },
  MUSIC: {
    test_sound1: require('#ambientify-sounds/test_sound1.ogg'),
    test_sound2: require('#ambientify-sounds/test_sound2.ogg'),
  },
  CUSTOM: {}
}


export const COLORS = {
  icons: '#5B636C',
  primary: '#06191F',
  channelBG: 'rgba(6, 25, 31, 0.65)',
  headerFore: '#EBDAD0',
  sideDrawerBG: '#0F2A32',
  buttonText: '#B9B4B1',
  sliderTop: '#EAE3D2',
  sliderBar: '#rgba(210, 207, 226, 0.7)',
  playButtonBG: '#0C2029',
  playButtonFore: '#B2B5BD',
  sideDrawerButtonActive: '#074752',
  bigPlayButtonShadowBG: 'rgba(255, 201, 187, 1)',
  bigPlayButtonBG: '#1C4B55',
  bigPlayButtonFore: '#EAEDF4',
  modalBG: '#06191F',
  modalContainerBG: 'rgba(0, 7, 16, 0.6)',
  modalButtonBG: '#34415B',
  modalButtonCancelBG: '#0C2029',
  wheelPickerInactive: 'rgba(185, 180, 177, 0.3)',
  carouselCardImageBG: '#074752',
  close: '#B74444',
}

export const CREDITS = [
  'All the sounds and images bundled in this app belong to their respective creators listed here. Audio content creators can be all found on freesound.org.',

  'Lake Waves 01 - RHumphries',
  'Big Thunder Clap - seth-m',
  'Thunder Clap And Rumble - Kinoton',
  'Lake Waves 01 - RHumphries',
  'Big Thunder Clap - seth-m',
  'Thunder Clap And Rumble - Kinoton',
  'Lake Waves 01 - RHumphries',
  'Big Thunder Clap - seth-m',

  'About screen illustration: undraw.co',
]