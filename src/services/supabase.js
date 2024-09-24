import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mlzusuqzsnmeuplbwwlh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1senVzdXF6c25tZXVwbGJ3d2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5NjcxNzksImV4cCI6MjA0MjU0MzE3OX0.nFHUnJ-gHrTe1ZEfHF7BNVL4I_BXt4N2XdOpxJ103Jk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
