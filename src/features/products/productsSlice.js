import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'recentView',
  initialState: JSON.parse(localStorage.getItem('recentView')) || [],
  reducers: {
    addProduct(state, action) {
      const newProduct = action.payload;

      // Check if product with same id already exists
      const exists = state.find(product => product.id === newProduct.id);

      if (!exists) {
        const newState = [newProduct, ...state].slice(0, 10);
        return newState;
      } else {
        return state;
      }
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'recentView/addProduct',
      state => {
        localStorage.setItem('recentView', JSON.stringify(state));
      },
    );
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;

export const getrecentViewProducts = state => state.recentView;
