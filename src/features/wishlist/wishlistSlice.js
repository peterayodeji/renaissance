import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [
    {
      id: 1,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 2,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 3,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 4,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 5,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 6,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 7,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 8,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 9,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 10,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 11,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 12,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
    {
      id: 13,
      name: 'Multicolor Stuart Sweater',
      price: 660,
    },
  ],
};

// const initialState = {
//   wishlist: [],
// };

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.wishlist.push(action.payload);
    },
    removeItem(state, action) {
      // payload = itemId
      state.wishlist = state.wishlist.filter(
        item => item.id !== action.payload,
      );
    },
    clearWishlist(state) {
      state.wishlist = [];
    },
  },
});

export const { addItem, removeItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

export const getWishlist = state => state.wishlist.wishlist;

export const isWishlistItem = id => state => {
  return state.wishlist.wishlist.some(item => item.id === id);
};
