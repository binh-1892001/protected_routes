import { createAsyncThunk } from "@reduxjs/toolkit";
import { jsonAxios } from "..";

export const AUTH_LOGIN = createAsyncThunk("auth/AUTH_LOGIN", async (formLogin) => {

  const response = await jsonAxios.post("/api.myservice.com/v1/auth/sign-in", formLogin);
  return response.data.data;
})

export const AUTH_REGISTER = createAsyncThunk("auth/AUTH_REGISTER", async (formRegister) => {
  const response = await jsonAxios.post("/api.myservice.com/v1/auth/sign-up", formRegister);
  return response.data;
})