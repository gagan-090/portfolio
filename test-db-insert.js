import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
  const { data, error } = await supabase.from('blog_categories').insert([{ name: 'Test Category', slug: 'test-category' }]).select();
  console.log("Insert Test:", data, error);
  if (data && data.length > 0) {
    await supabase.from('blog_categories').delete().eq('id', data[0].id);
  }
}
test();
