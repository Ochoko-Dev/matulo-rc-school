import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("news_posts")
    .select("id, title, content, published_at")
    .eq("slug", slug)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/news" className="text-sm text-gold-dark font-semibold hover:underline">
        ← Back to News
      </Link>

      <p className="text-xs text-gold-dark font-semibold mt-6 mb-2">
        {new Date(post.published_at).toLocaleDateString("en-KE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="text-3xl font-bold text-navy mb-6">{post.title}</h1>
      <p className="text-navy-dark/80 leading-relaxed whitespace-pre-line">{post.content}</p>
    </main>
  );
}
