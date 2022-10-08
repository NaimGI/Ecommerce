import { createSlice } from "@reduxjs/toolkit";

const sliceUser = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFatching = true;
    },
    loginSuccess: (state, action) => {
      state.isFatching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFatching = false;
      state.error = true;
    },
  },
});
export const { loginStart, loginSuccess, loginFailure } = sliceUser.actions;
export default sliceUser.reducer;
