import { createSelector } from "reselect";
import { userReducer } from "./user.slice";

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (userReducer) => userReducer.currentUser 
);

export const selectIsUserMenuOpen = createSelector(
    [selectUserReducer],
    (userReducer) => userReducer.isUserMenuOpen
);
