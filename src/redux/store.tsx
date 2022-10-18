// import { configureStore } from "@reduxjs/toolkit";

// import { combineReducers } from "redux";

// import weatherReducer from "./weatherReducer";

// const allReducers = combineReducers({
//   main: weatherReducer,
// });

// const store = configureStore({
//   reducer: allReducers,
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./weatherReducer";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;
