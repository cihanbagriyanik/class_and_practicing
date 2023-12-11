import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload.data.username;
      state.token = payload.token;
    },
    signInSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.token;
      state.isAdmin = payload?.user?.isAdmin;
    },
    signOutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  registerSuccess,
  signInSuccess,
  signOutSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;