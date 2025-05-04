import supabase from './supabase';

// # GET SHIPPING ADDRESSES
export async function getShippingAddresses({ userId }) {
  const { data, error } = await supabase
    .from('addresses')
    .select('*')
    .eq('userId', userId);

  if (error) {
    // console.log(error.message);
    throw new Error('Shipping Addresses could not be loaded');
  }

  if (Array.isArray(data) && data.length < 1) return {};

  return data.at(0);
}

// # INSERT/UPDATE SHIPPING ADDRESSES
export async function addShippingAddresses(address) {
  const { data, error } = await supabase
    .from('addresses')
    .upsert([address], { onConflict: ['userId'] })
    .select()
    .single();

  if (error) {
    // console.log(error.message);
    throw new Error(
      'There was an error while updating shipping addresses. Please try again.',
    );
  }

  return data;
}
