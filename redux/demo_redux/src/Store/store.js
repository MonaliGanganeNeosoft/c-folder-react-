import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Fetures/Counter/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
