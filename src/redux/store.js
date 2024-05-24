import authSlice from "./reducers/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: authSlice
  }
})