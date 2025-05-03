import supabase from './supabase';

// # SUBSCRIBE
export async function subscribe({
  email,
  preference,
  country = '',
  countryCode = '',
  userId = null,
}) {
  const newsletter = { email, preference, country, countryCode, userId };
  const { data, error } = await supabase
    .from('newsletters')
    .upsert([newsletter], { onConflict: ['email'] })
    .select()
    .single();

  if (error) {
    // console.log(error.message);
    throw new Error(
      'There was an error subscribing to Newsletter. Please try again.',
    );
  }

  return data;
}

// # GET NEWSLETTER PREFERENCES
export async function getNewsletterPreferences({ email }) {
  const { data, error } = await supabase
    .from('newsletters')
    .select('*')
    .eq('email', email)
    .select('email, preference, country, countryCode');

  if (error) {
    // console.log(error.message);
    throw new Error('Newletters could not be loaded');
  }

  if (Array.isArray(data) && data.length < 1) return {};

  return data.at(0);
}

// # UNSUBSCRIBE
export async function unSubscribe({ email }) {
  const { data, error } = await supabase
    .from('newsletters')
    .delete()
    .eq('email', email);

  if (error) {
    // console.log(error.message);
    throw new Error('There was an issue while unsubcribing newsletters');
  }

  return data;
}
