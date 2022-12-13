import { ALERT_errors, CLEAR_ERRORS } from "../actionTypes/alertTypes";

export const alertErrors = (msg, type) => async (dispatch) => {
  const id = Math.random();
  dispatch({ type: ALERT_errors, payload: { msg, id, type } });
  setTimeout(() => {
    dispatch({ type: CLEAR_ERRORS, payload: id });
  }, 10000);
};
