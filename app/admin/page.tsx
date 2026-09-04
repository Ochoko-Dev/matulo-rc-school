import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import AdminDashboard from "@/components/AdminDashboard";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: newsPosts } = await supabase
    .from("news_posts")
    .select("id, title, slug, content, published_at")
    .order("published_at", { ascending: false });

  return <AdminDashboard initialPosts={newsPosts ?? []} userEmail={user.email ?? ""} />;
}
