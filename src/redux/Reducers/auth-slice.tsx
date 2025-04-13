import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";

interface GlobalProps {
  isFetching: boolean;
  errorMessage: object;
  currentUser: null;
  loadingInit: boolean;
}

const initialState: GlobalProps = {
  isFetching: false,
  errorMessage: {},
  currentUser: null,
  loadingInit: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSignInRequest: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    authFailure: (state, action: PayloadAction<GlobalProps>) => {
      return {
        ...state,
        errorMessage: action.payload,
      };
    },
  },
});

export const { authSignInRequest, authFailure } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLmsLoginState = (state: RootState) => state.authState;

export default authSlice.reducer;
