import supabase from './supabase';

export async function getProducts({ category, subCategory, tags }) {
  let query = supabase.from('products').select('*');

  if (category) {
    query = query.eq('category', category);
  }

  if (category && subCategory) {
    query = query.eq('subcategory', subCategory);
  }

  if (category && subCategory && tags) {
    query = query.contains('tags', JSON.stringify([tags]));
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error('Products could not be loaded');
  }

  // console.log(data);

  return { data };
}

export async function getProductsFilters({ category, subCategory }) {
  let query = supabase.from('products');

  if (!category && !subCategory) {
    query = query.select('category');
  }

  if (category) {
    query = query.select('*').eq('category', category).select('subcategory');
  }

  if (category && subCategory) {
    query = query.select('*').eq('subcategory', subCategory).select('tags');
  }

  const { data, error } = await query;

  if (error || !data || (Array.isArray(data) && !data.length)) {
    // console.error(error);
    throw new Error('Product Filters could not be loaded');
  }

  // console.log(data);

  return { data };
}
