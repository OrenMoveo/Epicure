import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import { sliceNames } from "../../shared/constants";

export interface UserState {
  user: User;
  isLoggedInUser: boolean;
}

const initialState: UserState = {
  user: {
    email: "",
    password: "",
  },
  isLoggedInUser: false,
};

const userSlice = createSlice({
  name: sliceNames.userSlice,
  initialState,
  reducers: {
    setIsLoggedInUser: (state, action: PayloadAction<boolean>) => {
      state.isLoggedInUser = action.payload;
    },
  },
});

export const { setIsLoggedInUser } = userSlice.actions;

export default userSlice.reducer;
