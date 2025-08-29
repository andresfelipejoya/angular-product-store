import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart, deleteQuantity, removeFromCart, updateQuantity } from './cart.actions';
import { initialCartState } from './cart.state';

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, { ...product, quantity: 1 }],
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId),
  })),
  on(updateQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: state.items.map(item => {
      if (item.id === productId && quantity > 0) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    }),
  })),
  on(deleteQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: state.items.map(item => {
      if (item.id === productId) {
        if (item.quantity > 0) {
          return { ...item, quantity: item.quantity - quantity };
        } else {
          return { ...item, quantity: 0 };
        }
      }
      return item;
    }),
  })),
  on(clearCart, () => ({
    items: []
  })),
);
