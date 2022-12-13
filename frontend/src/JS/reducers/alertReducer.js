import { ALERT_errors, CLEAR_ERRORS } from "../actionTypes/alertTypes";

const initialState = [];

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERT_errors:
      return [...state, payload];
    case CLEAR_ERRORS:
      return state.filter((el) => el.id != payload);
    default:
      return state;
  }
};
export default alertReducer;
