"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

type NewsPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published_at: string;
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toDateInputValue(iso: string) {
  return new Date(iso).toISOString().split("T")[0];
}

export default function AdminDashboard({
  initialPosts,
  userEmail,
}: {
  initialPosts: NewsPost[];
  userEmail: string;
}) {
  const [posts, setPosts] = useState<NewsPost[]>(initialPosts);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publishedAt, setPublishedAt] = useState(toDateInputValue(new Date().toISOString()));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const resetForm = () => {
    setTitle("");
    setContent("");
    setPublishedAt(toDateInputValue(new Date().toISOString()));
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const isoDate = new Date(publishedAt).toISOString();

    if (editingId) {
      const { error } = await supabase
        .from("news_posts")
        .update({ title, content, published_at: isoDate })
        .eq("id", editingId);

      if (!error) {
        setPosts(
          posts
            .map((p) => (p.id === editingId ? { ...p, title, content, published_at: isoDate } : p))
            .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
        );
        resetForm();
      }
    } else {
      const slug = slugify(title);
      const { data, error } = await supabase
        .from("news_posts")
        .insert([{ title, content, slug, published_at: isoDate }])
        .select()
        .single();

      if (!error && data) {
        setPosts(
          [data, ...posts].sort(
            (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
          )
        );
        resetForm();
      }
    }

    setSaving(false);
  };

  const handleEdit = (post: NewsPost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setPublishedAt(toDateInputValue(post.published_at));
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("news_posts").delete().eq("id", id);
    if (!error) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-bold text-navy">News Dashboard</h1>
          <p className="text-sm text-navy-dark/60">Logged in as {userEmail}</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm border border-navy-light/30 text-navy px-4 py-2 rounded hover:bg-navy-light/10 transition"
        >
          Log Out
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4 mb-12">
        <h2 className="font-bold text-navy">{editingId ? "Edit Post" : "New Post"}</h2>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Publish Date</label>
          <input
            type="date"
            required
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Content</label>
          <textarea
            required
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-gold text-navy-dark font-semibold px-5 py-2.5 rounded hover:bg-gold-light transition disabled:opacity-60"
          >
            {saving ? "Saving..." : editingId ? "Update Post" : "Publish Post"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="text-navy-dark/70 px-4 py-2.5 text-sm hover:underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <h2 className="font-bold text-navy mb-4">Existing Posts</h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gold-dark font-semibold">
                {new Date(post.published_at).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h3 className="font-bold text-navy">{post.title}</h3>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => handleEdit(post)}
                className="text-sm border border-navy-light/30 text-navy px-3 py-1.5 rounded hover:bg-navy-light/10 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-sm border border-red-300 text-red-600 px-3 py-1.5 rounded hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
