import {
  PendingLogin,
  SuccessLogin,
  ErrorLogin,
} from "../actions/login.action";

export interface LoginState {
  pending: boolean;
  isUserLoggedIn: boolean;
  user: any;
  error: any;
}

const initialState = {
  pending: false,
  isUserLoggedIn: false,
  user: [],
  error: "",
};

export const loginReducer = (state: LoginState = initialState, action) => {
  switch (action.type) {
    case PendingLogin: {
      return { ...state, pending: true };
    }
    case SuccessLogin:
      return {
        ...state,
        pending: false,
        isUserLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case ErrorLogin:
      return {
        ...state,
        pending: false,
        isUserLoggedIn: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
