import { TOGGLE_PITCH } from '../actions'
/**
 * TODO:
 * Implement settings
 */

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_PITCH: return ({
      ...state,
      pitchRandomization: !state.pitchRandomization
    })
    default: return state;
  }
};