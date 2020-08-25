import { createSlice } from "@reduxjs/toolkit";

// authencation reducers initial state
export const initialState = {
  loading: false,
  hasError: false,
  isAuthenticated: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    // success handler for successfully login
    setLoading: {
      reducer: (state, action) => {
        state.loading = action.payload;
      },
    },
    // error handler
    getError: {
      reducer: (state, action) => {},
    },
  },
});

export const { setLoading, getError } = loadingSlice.actions;

export const loadingSelector = (state) => state.loading;

export default loadingSlice.reducer;
