import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import loadingReducer from "./loadingSlice";
import errorReducer from "./errorSlice";

/*
    used redux toolkit for store configuration 
    configuration reference https://redux-toolkit.js.org/usage/usage-guide
*/

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  loading: loadingReducer,
  error: errorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
