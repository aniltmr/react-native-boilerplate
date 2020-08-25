import { createSlice } from "@reduxjs/toolkit";

// authencation reducers initial state
export const initialState = {
  loading: false,
  hasError: false,
  error: { type: null, errorMessage: null, component: null },
  isAuthenticated: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    // success handler for successfully login
    setError: {
      reducer: (state, action) => {
        let error = {
          type: action.payload.type,
          errorMessage: action.payload.msg,
          component: action.payload.component,
        };
        state.error = error;
      },
    },
    unSetError: {
      reducer: (state, action) => {
        state.error = { type: null, errorMessage: null, component: null };
      },
    },
    // error handler
    getError: {
      reducer: (state, action) => {},
    },
  },
});

export const { setError, unSetError, getError } = errorSlice.actions;

export const errorSelector = (state) => state.error;

export default errorSlice.reducer;
