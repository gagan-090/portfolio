-- Create Enum for Blog Status
CREATE TYPE blog_status AS ENUM ('draft', 'published', 'archived');

-- Table: Categories
CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: Tags
CREATE TABLE blog_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: Authors (Tied to Supabase Auth)
CREATE TABLE blog_authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  twitter_handle VARCHAR(255),
  github_handle VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: Blogs
CREATE TABLE blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  reading_time_minutes INTEGER DEFAULT 1,
  status blog_status DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  author_id UUID REFERENCES blog_authors(id) ON DELETE CASCADE,
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  category_slug VARCHAR(255) REFERENCES blog_categories(slug) ON DELETE SET NULL,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table: Blog Views
CREATE TABLE blog_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
  ip_address VARCHAR(45),
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Allow public read access to all blog tables
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on categories" ON blog_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access on blogs" ON blogs FOR SELECT USING (true);
CREATE POLICY "Allow public read access on authors" ON blog_authors FOR SELECT USING (true);
