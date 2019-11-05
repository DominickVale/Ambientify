/**
 * TODO:
 * Add LOAD_SOUND
 * Add UNLOAD_SOUND
 * Add CHANGE_VOLUME
 * Add STOP_ALL_CHANNELS
 */

export default (state = initialState, action) => {
  switch (action.type) {

    case CHANNELS_INIT: return {
      ...state,
      [action.payload.channelId]: {
        soundObject: action.payload.soundObject,
        loaded: false,
        playing: false,
        volume: 100,
      },
    };

    default: return state;
  }
};