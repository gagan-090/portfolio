create table contact_messages (
  id bigint generated always as identity primary key,
  name text,
  email text,
  subject text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS
alter table contact_messages enable row level security;

-- Grant INSERT to anon so anyone can submit a message
grant insert on contact_messages to anon;
grant insert on contact_messages to authenticated;

-- Policy to allow anonymous inserts
create policy "Allow anonymous inserts on contact_messages"
  on contact_messages
  for insert
  to anon, authenticated
  with check (true);
