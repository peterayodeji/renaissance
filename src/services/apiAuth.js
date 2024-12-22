import supabase from './supabase';

// # SIGNUP
export async function signup({
  firstName,
  lastName,
  email,
  password,
  newsletter,
}) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    throw new Error(authError.message);
  }

  // Insert user profile into the 'profiles' table
  const { error: profileError } = await supabase.from('profiles').insert([
    {
      id: authData.user.id,
      firstName,
      lastName,
      newsletter,
    },
  ]);

  if (profileError) {
    console.log(profileError.message);
  }

  return authData;
}

// # GET USER PROFILE
export async function getUserProfile() {
  const user = supabase.auth.user(); // GET CURRENT USER LEGIT WAY

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    // throw new Error(error.message);
    console.error(error.message);
    return;
  }

  console.log(data);
  // return data;
}

// # LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// # GET CURRENT USER
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  // console.log(data);
  return data?.user;
}

// # LOGOUT
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
