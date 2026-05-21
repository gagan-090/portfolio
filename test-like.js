import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
  const blogId = '2d52dc4e-b116-4d79-bbd7-60b5225d4fa0';
  const deviceId = 'test-device-id-123';
  
  const { data, error } = await supabase.from('blog_likes').insert([{ blog_id: blogId, user_id: deviceId }]).select();
  console.log("Insert Like Test:", data, error);
}
test();
