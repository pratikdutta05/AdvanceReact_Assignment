import { createSlice } from "@reduxjs/toolkit";
import { City } from "../interfaces";

type InitialStateType = {
  wishList: City[];
};

const initialState: InitialStateType = {
  wishList: [],
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.wishList = [...state.wishList, action.payload];
    },
    deleteUser: (state, action) => {
      const indexPos = state.wishList.findIndex(
        (value) => value.id === action.payload
      );
      state.wishList.splice(indexPos, 1);
    },
  },
});

export default UserSlice.reducer;
export const { addUser, deleteUser } = UserSlice.actions;
