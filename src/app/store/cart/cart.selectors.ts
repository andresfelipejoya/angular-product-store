import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCart,
  (state: CartState) => state.items
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }
);