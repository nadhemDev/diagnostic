import { ADD_RESERVATION } from "../actionTypes/reservTypes";

  
  const initialState = {
    reservation: [],
      errors: []
  };
  
  const reservReducer = (state = initialState, { type, payload }) => {
    switch (type) {
     
  
      case ADD_RESERVATION:
            return {
          ...state,
          reservation: payload.newReservation,
           load: false,
        };

        default:
            return state;
   
    }
  };
  export default reservReducer;
  