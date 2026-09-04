import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "News & Announcements | Matulo RC Primary School",
  description: "Latest news and announcements from Matulo RC Primary School.",
};

export default async function NewsList() {
  const { data: newsPosts } = await supabase
    .from("news_posts")
    .select("id, title, slug, content, published_at")
    .order("published_at", { ascending: false });

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-10">News & Announcements</h1>

      <div className="space-y-4">
        {newsPosts && newsPosts.length > 0 ? (
          newsPosts.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.slug}`}
              className="block bg-white rounded-lg shadow p-5 hover:shadow-lg transition border-l-4 border-gold"
            >
              <p className="text-xs text-gold-dark font-semibold mb-1">
                {new Date(post.published_at).toLocaleDateString("en-KE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="text-lg font-bold text-navy">{post.title}</h2>
              <p className="text-sm text-navy-dark/70 mt-1 line-clamp-2">{post.content}</p>
            </Link>
          ))
        ) : (
          <p className="text-navy-dark/60">No news posted yet. Check back soon.</p>
        )}
      </div>
    </main>
  );
}
