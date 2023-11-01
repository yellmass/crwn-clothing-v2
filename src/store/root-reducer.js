import {combineReducers} from '@reduxjs/toolkit';

import {userReducer} from './user/user.slice';
import { categoryReducer } from './categories/category.slice';
import { cartReducer } from './cart/cart.slice';

export const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
});