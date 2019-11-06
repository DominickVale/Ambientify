/**
 * TODO:
 * Add LOAD_SOUND
 * Add UNLOAD_SOUND
 * Add CHANGE_VOLUME
 * Add STOP_ALL_CHANNELS
 */

export const CHANNEL_INIT = 'CHANNEL_INIT';
export const LOAD_SOUND = 'LOAD_SOUND';

export const initChannel = (channelId, soundObject) => ({
  type: CHANNEL_INIT,
  payload: { channelId, soundObject },
});

export const loadSound = (channelId, newSound) => ({
  type: LOAD_SOUND,
  payload: { channelId, newSound },
});