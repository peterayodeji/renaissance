import supabase from './supabase';
import { PAGE_SIZE } from '../utils/constants';

export const fetchUserWishlist = async ({ userId, page }) => {
  let query = supabase
    .from('wishlist')
    .select('productId, products(*)', { count: 'exact' })
    .eq('userId', userId);

  // * PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching wishlist:', error);
    throw new Error('Wishlist could not be loaded');
  }

  const wishlist = data.map(item => item.products);

  return { wishlist, count };
};

export const isProductInWishlist = async ({ userId, productId }) => {
  const { data, error } = await supabase
    .from('wishlist')
    .select('id')
    .eq('userId', userId)
    .eq('productId', productId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return false;
    // console.log('Wishlist inaccessible', error);
    return false;
  }

  return !!data;
};

export const addToWishlist = async ({ userId, productId }) => {
  const { data, error } = await supabase
    .from('wishlist')
    .insert([{ userId, productId }]);

  if (error) {
    console.log('Error adding to wishlist:', error);
    throw new Error(error);
  }

  return data;
};

export const removeFromWishlist = async ({ userId, productId }) => {
  const { data, error } = await supabase
    .from('wishlist')
    .delete()
    .eq('userId', userId)
    .eq('productId', productId);

  if (error) {
    console.log('Error removing from wishlist:', error);
    throw new Error(error);
  }

  return data;
};
