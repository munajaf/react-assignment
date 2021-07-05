import {SET_HISTORY_LAT_LONG, SET_LAT_LONG, START_LOADING} from "./types";

export const history = (dispatch) => {
  dispatch({ type: START_LOADING });
}

export const setLatLong = (data) => (dispatch) => {
  const lat = data.geometry.location.lat();
  const long = data.geometry.location.lng();
  dispatch({ type: SET_LAT_LONG, payload: { lat, long, data }})
}

export const setHistoryLatLong = (data) => (dispatch) => {
  const historyLat = data.geometry.location.lat();
  const historyLong = data.geometry.location.lng();
  dispatch({ type: SET_HISTORY_LAT_LONG, payload: { historyLat, historyLong}})
}