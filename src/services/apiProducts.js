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

export async function getProductsSearch({ searchValue, category }) {
  const [subcategory, name, tags] = await Promise.all([
    supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .ilike('subcategory', `%${searchValue}%`)
      .select('id, subcategory'),

    supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .ilike('name', `%${searchValue}%`)
      .select('id, name'),

    supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .ilike('tagsText', `%${searchValue}%`)
      .select('id, subcategory, tags'),
  ]);

  if (subcategory.error || name.error || tags.error) {
    // console.error(nameError.message);
    throw new Error('An error has occured!');
  }

  return { subcategory: subcategory.data, name: name.data, tags: tags.data };
}
