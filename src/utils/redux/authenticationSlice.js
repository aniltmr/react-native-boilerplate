import { createSlice } from "@reduxjs/toolkit";
import Constants from "../../components/Authentication/Constants";
import { setLoading } from "./loadingSlice";
import ApiController from "../api/ApiController";
import ErrorModel from "../models/ApiErrorModel";
import { setError } from "./errorSlice";

// authencation reducers initial state
export const initialState = {
  loading: false,
  hasError: false,
  isAuthenticated: false,
  currentScreen: Constants.SCREEN.LOGIN,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // success handler for successfully login
    loginSuccess: {
      reducer: (state, action) => {},
    },
    setAuthenticationScreen: {
      reducer: (state, action) => {
        console.log("state", action.payload);
        state.currentScreen = action.payload;
      },
    },

    // error handler
    getError: {
      reducer: (state, action) => {},
    },
  },
});

export const {
  loginSuccess,
  setAuthenticationScreen,
  getError,
  authenticationError,
} = authenticationSlice.actions;

export const authenticationSelector = (state) => state.authentication;

export default authenticationSlice.reducer;

export function loginUser(data) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    const res = await ApiController.loginUser(data);

    if (res instanceof ErrorModel) {
      res.component = "login";
      res.type = "form_error";
      console.log("res error", res);
      dispatch(setError(res));
      // dispatch(setLoading(false));
    } else {
      // dispatch(loginUserSuccess(res.data));
      console.log("login sucess", res.data);
      dispatch(setLoading(false));
    }
  };
}

export function signUpUser(data) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    const res = await ApiController.signUpUser(data);

    if (res instanceof ErrorModel) {
      res.type = "login";
      dispatch(setLoading(false));
    } else {
      // dispatch(loginUserSuccess(res.data));
      console.log("login sucess", res.data);
      dispatch(setLoading(false));
    }
  };
}
