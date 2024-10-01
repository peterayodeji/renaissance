import supabase from './supabase';
import { PAGE_SIZE } from '../utils/constants';

export async function getProducts({ category, subcategory, tags, sort, page }) {
  let query = supabase.from('products').select('*', { count: 'exact' });

  // * FILTER
  if (category) {
    query = query.eq('category', category);
  }

  if (category && subcategory) {
    query = query.eq('subcategory', subcategory);
  }

  if (category && subcategory && tags) {
    query = query.contains('tags', JSON.stringify([tags]));
  }

  // * SORT
  if (sort)
    query = query.order(sort.field, {
      ascending: sort.direction === 'asc',
    });

  // * PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    // console.error(error);
    throw new Error('Products could not be loaded');
  }

  return { data, count };
}

export async function getProductsFilters({ category, subcategory }) {
  let query = supabase.from('products');

  if (!category && !subcategory) {
    query = query.select('category');
  }

  if (category) {
    query = query.select('*').eq('category', category).select('subcategory');
  }

  if (category && subcategory) {
    query = query.select('*').eq('subcategory', subcategory).select('tags');
  }

  const { data, error } = await query;

  if (error || !data || (Array.isArray(data) && !data.length)) {
    // console.error(error);
    throw new Error('Product Filters could not be loaded');
  }

  return { data };
}
