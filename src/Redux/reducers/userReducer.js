// userReducer.js
import { LOGIN_USER, LOGOUT_USER } from '../actions/userActions';

const initialState = {
  isAuthenticated: false,
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      };
    default:
      return state;
  }
};

export default userReducer;
