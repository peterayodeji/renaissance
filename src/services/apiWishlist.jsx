import supabase from './supabase';
// import { PAGE_SIZE } from '../utils/constants';

export const fetchUserWishlist = async userId => {
  const { data, error } = await supabase
    .from('wishlist')
    .select('productId, products(*)')
    .eq('userId', userId);

  if (error) {
    console.error('Error fetching wishlist:', error);
    // return [];
  }

  return data.map(item => item.products);
};

export const isProductInWishlist = async ({ userId, productId }) => {
  // console.log({ productId, userId });

  const { data, error } = await supabase
    .from('wishlist')
    .select('id')
    .eq('userId', userId)
    .eq('productId', productId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return false;
    console.error('Error checking wishlist:', error);
    return false;
  }

  return !!data;
};

export const addToWishlist = async ({ userId, productId }) => {
  const { data, error } = await supabase
    .from('wishlist')
    .insert([{ userId, productId }]);

  if (error) {
    console.error('Error adding to wishlist:', error);
    // return false;
  }

  // console.log(data);

  return true;
};

export const removeFromWishlist = async ({ userId, productId }) => {
  console.log({ userId, productId });

  const { data, error } = await supabase
    .from('wishlist')
    .delete()
    .eq('userId', userId)
    .eq('productId', productId);

  if (error) {
    console.error('Error removing from wishlist:', error);
    // return false;
  }

  // return data;

  return true;
};
