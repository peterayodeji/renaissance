import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cartRenaissance')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = cartItemId
      state.cart = state.cart.filter(
        item => item.cartItemId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      // payload = cartItemId
      const item = state.cart.find(item => item.cartItemId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = cartItemId
      const item = state.cart.find(item => item.cartItemId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.startsWith('cart/'),
      state => {
        localStorage.setItem('cartRenaissance', JSON.stringify(state.cart));
      },
    );
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = state => state.cart.cart;

export const getTotalCartQuantity = state =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = state =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = id => state =>
  state.cart.cart.find(item => item.cartItemId === id)?.quantity ?? 0;

export const getCartItemById = id => state =>
  state.cart.cart.find(item => item.cartItemId === id);

export const isEmptyCart = state => state.cart.cart.length < 1;
