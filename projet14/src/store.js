import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/usersSlice.js";



const store = configureStore({
  reducer:{
    users : usersSlice
  }
})
export default store;