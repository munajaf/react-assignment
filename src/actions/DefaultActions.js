import { SET_HISTORY, SET_HISTORY_LAT_LONG, SET_LAT_LONG } from "./types";

export const setHistory = (data) => (dispatch) => {
  dispatch({ type: SET_HISTORY, payload: { data } });
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