import {
  SET_HISTORY,
  SET_HISTORY_LAT_LONG,
  SET_LAT_LONG,
  START_LOADING,
  STOP_LOADING
} from "../actions/types";

const INIT_STATE = {
  loading: true,
  lat: 5.414130699999999,
  long: 100.3287506,
  history: [],
  historyLat: 5.414130699999999,
  historyLong: 100.3287506
}

const updateLatLong = (state, {lat, long, data}) => {
  return {
    ...state,
    lat,
    long,
    history: [
      {...data},
      ...state.history
    ]
  }
}

const DefaultReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case SET_HISTORY:
      return { ...state, history: [ {...payload.data}, ...state.history]}
    case SET_LAT_LONG:
      return updateLatLong(state, payload)
    case SET_HISTORY_LAT_LONG:
      return { ...state, historyLat: payload.historyLat, historyLong: payload.historyLong}
    default:
      return state;
  }
}

export default DefaultReducer;