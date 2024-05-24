import { AUTH_LOGIN, AUTH_REGISTER } from "../api/services/authService";

import { Cookies } from "react-cookie";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    data: {},
    error: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AUTH_LOGIN.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AUTH_LOGIN.fulfilled, (state, action) => {

        state.isLoading = false;
        localStorage.setItem('user', JSON.stringify(action.payload));
        new Cookies().set('accessToken', action.payload.accessToken);
        state.data = action.payload;
      })
      .addCase(AUTH_LOGIN.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(AUTH_REGISTER.fulfilled, (state, action) => {
        console.log(action.payload)
      })
  }
})

export default authSlice.reducer;