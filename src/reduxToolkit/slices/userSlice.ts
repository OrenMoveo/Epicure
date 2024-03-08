import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import { sliceNames } from "../../shared/constants";

export interface UserState {
  user: User;
  isLoggedInUser: boolean;
  isSignInModalOpen: boolean;
}

const initialState: UserState = {
  user: {
    email: "",
    password: "",
  },
  isLoggedInUser: false,
  isSignInModalOpen: false,
};

const userSlice = createSlice({
  name: sliceNames.userSlice,
  initialState,
  reducers: {
    setIsLoggedInUser: (state, action: PayloadAction<boolean>) => {
      state.isLoggedInUser = action.payload;
    },
    setSignInModal: (state, action: PayloadAction<boolean>) => {
      state.isSignInModalOpen = action.payload;
    },
  },
});

export const { setIsLoggedInUser, setSignInModal } = userSlice.actions;

export default userSlice.reducer;
