import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlistRenaissance')) || [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem(state, action) {
      state.wishlist.push(action.payload);
    },
    removeItem(state, action) {
      state.wishlist = state.wishlist.filter(
        item => item.id !== action.payload,
      );
    },
    clearWishlist(state) {
      state.wishlist = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.startsWith('wishlist/'),
      state => {
        localStorage.setItem(
          'wishlistRenaissance',
          JSON.stringify(state.wishlist),
        );
      },
    );
  },
});

export const { addItem, removeItem, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

export const getWishlist = state => state.wishlist.wishlist;

export const isWishlistItem = id => state => {
  return state.wishlist.wishlist.some(item => item.id === id);
};
