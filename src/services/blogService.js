import { supabase } from '../supabaseClient';

// Helper: fetch view counts for a list of blog IDs
async function fetchViewCounts(blogIds) {
  if (!blogIds || blogIds.length === 0) return {};
  try {
    const { data, error } = await supabase
      .from('blog_views')
      .select('blog_id')
      .in('blog_id', blogIds);
    if (error || !data) return {};
    const counts = {};
    data.forEach(v => {
      counts[v.blog_id] = (counts[v.blog_id] || 0) + 1;
    });
    return counts;
  } catch {
    return {};
  }
}

export const blogService = {
  // Fetch all published blogs with optional filtering & search
  async getBlogs({ category, tag, search, limit = 10, page = 1 } = {}) {
    try {
      let query = supabase
        .from('blogs')
        .select(`
          id, slug, title, excerpt, cover_image_url, reading_time_minutes, published_at,
          category:blog_categories!category_id(name, slug),
          author:blog_authors(full_name, avatar_url)
        `, { count: 'exact' })
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (category && category !== 'all') {
        query = query.eq('category_slug', category);
      }

      if (search) {
        query = query.or(`title.ilike.%${search}%,excerpt.ilike.%${search}%`);
      }

      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;
      if (error) throw error;

      // Fetch view counts and merge
      const blogIds = (data || []).map(b => b.id);
      const viewCounts = await fetchViewCounts(blogIds);
      const dataWithViews = (data || []).map(b => ({
        ...b,
        view_count: viewCounts[b.id] || 0,
      }));

      return { data: dataWithViews, count, error: null };
    } catch (error) {
      console.error('Error fetching blogs:', error.message);
      return { data: [], count: 0, error: error.message };
    }
  },

  // Fetch featured blogs
  async getFeaturedBlogs(limit = 3) {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id, slug, title, excerpt, cover_image_url, reading_time_minutes, published_at,
          category:blog_categories!category_id(name, slug),
          author:blog_authors(full_name, avatar_url)
        `)
        .eq('status', 'published')
        .eq('is_featured', true)
        .order('published_at', { ascending: false })
        .limit(limit);
      if (error) throw error;

      // Fetch view counts and merge
      const blogIds = (data || []).map(b => b.id);
      const viewCounts = await fetchViewCounts(blogIds);
      const dataWithViews = (data || []).map(b => ({
        ...b,
        view_count: viewCounts[b.id] || 0,
      }));

      return { data: dataWithViews, error: null };
    } catch (error) {
      return { data: [], error: error.message };
    }
  },

  // Fetch single blog by slug
  async getBlogBySlug(slug) {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          category:blog_categories!category_id(name, slug),
          author:blog_authors(full_name, avatar_url, bio, twitter_handle, github_handle)
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single();
      if (error) throw error;

      // Record view asynchronously
      supabase.from('blog_views').insert([{ blog_id: data.id }]).then(() => {});

      // Fetch current view count (including the one we just added)
      const { count: viewCount } = await supabase
        .from('blog_views')
        .select('*', { count: 'exact', head: true })
        .eq('blog_id', data.id);

      return { data: { ...data, view_count: viewCount || 0 }, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  },

  // Fetch related posts by same category
  async getRelatedBlogs(categorySlug, currentSlug, limit = 3) {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`id, slug, title, excerpt, cover_image_url, reading_time_minutes, published_at, category:blog_categories!category_id(name, slug)`)
        .eq('status', 'published')
        .eq('category_slug', categorySlug)
        .neq('slug', currentSlug)
        .limit(limit);
      if (error) throw error;

      // Fetch view counts and merge
      const blogIds = (data || []).map(b => b.id);
      const viewCounts = await fetchViewCounts(blogIds);
      const dataWithViews = (data || []).map(b => ({
        ...b,
        view_count: viewCounts[b.id] || 0,
      }));

      return { data: dataWithViews, error: null };
    } catch (error) {
      return { data: [], error: error.message };
    }
  },

  // Fetch all categories
  async getCategories() {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('id, name, slug')
        .order('name');
      if (error) throw error;
      return { data: data || [], error: null };
    } catch (error) {
      return { data: [], error: error.message };
    }
  },
};
