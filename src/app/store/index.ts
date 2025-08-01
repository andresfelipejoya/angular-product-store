import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';
import { CartState } from './cart/cart.state';

export interface AppState {
    cart: CartState;
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
};