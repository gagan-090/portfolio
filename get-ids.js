import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
  const { data: authors } = await supabase.from('blog_authors').select('id, full_name').limit(1);
  const { data: categories } = await supabase.from('blog_categories').select('id, name').limit(1);
  console.log("Author:", authors);
  console.log("Category:", categories);
}
test();
