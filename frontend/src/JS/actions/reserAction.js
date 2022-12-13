import { ADD_RESERVATION} from '../actionTypes/reservTypes';
import axios from "axios";
import AlertErrors from '../../components/alertErrors/AlertErrors';
import { alertErrors } from './alertActions';
import { FAIL } from '../actionTypes/userAcTypes';

export const addreservation = (newReservation, navigate) => async (dispatch) => {
    // console.log(newUser);
    try {
      const res = await axios.post("/api/reservation/create", newReservation);
  
      console.log(newReservation);
  
      dispatch({ type: ADD_RESERVATION, payload: res.data });
      navigate("/");
      dispatch(AlertErrors((res.data.msg, "success")));
    } catch (error) {
      error.response.data.errors.forEach((el) => {
        dispatch(alertErrors(el.msg, "error"));
      });
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };