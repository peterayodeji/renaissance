import supabase from './supabase';

// # SUBSCRIBE
export async function subscribe({ email, preference, userId }) {
  const newsletter = { email };
  if (preference) newsletter.preference = preference;
  if (userId) newsletter.userId = userId;

  const { data, error } = await supabase
    .from('newsletters')
    .upsert([newsletter], { onConflict: ['email'] });

  if (error) {
    // console.log(error.message);
    throw new Error(
      'There was an error subscribing to Newsletter. Please try again.',
    );
  }

  return data;
}
