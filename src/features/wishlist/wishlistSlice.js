import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      // console.log(action.payload);

      state.wishlist.push(action.payload);
    },
    removeItem(state, action) {
      // payload = itemId
      // console.log(action.payload);

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
  // console.log(id);
  return state.wishlist.wishlist.some(item => item.id === id);
};
