import {
  FAIL,
  SIGNUP,
  LOGIN,
  LOADING,
  GET_USERS,
  GET_CURRENT,
  LOGOUT,
  EDIT_USER,
  DELETE_USER,
} from "../actionTypes/userAcTypes";

const initialState = {
  user: [],
  load: true,
  auth: false,
  errors: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAIL:
      return { ...state, errors: payload.errors, user: null };

    case SIGNUP:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.newUser));

      return {
        ...state,
        user: payload.newUser,
        auth: true,
        load: false,
      };

    case LOGIN:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.foundUser));

      return { ...state, user: payload.foundUser, auth: true, load: false };

    case LOADING:
      return { ...state, load: true };

    case GET_CURRENT:
      return { ...state, user: payload.user, auth: true, load: false };
    case GET_USERS:
      return { ...state, user: payload.users, auth: true, load: false };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return { ...state, user: null };
    case EDIT_USER:
      return {
        ...state,
        user: state.user.map((e) =>
          e.id == payload.id ? payload : payload.updatedUser
        ),
      };
    case DELETE_USER:
      return { ...state, user: state.user.filter((e) => e._id !== payload.id) };
    default:
      return state;
  }
};
export default userReducer;
