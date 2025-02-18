// import { USER_ACTION_TYPES } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";

export const USER_INITIAL_STATE = {
    currentUser: null,
    isUserMenuOpen: false,
  };


export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsUserMenuOpen(state, action){
      state.isUserMenuOpen = action.payload;
    },
  }
});

export const { setCurrentUser, setIsUserMenuOpen } = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducer = (state = USER_INITIAL_STATE, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case USER_ACTION_TYPES.SET_CURRENT_USER:
//         return {
//           ...state,
//           currentUser: payload,
//         };
//       default:
//         return state;
//     }
//   };