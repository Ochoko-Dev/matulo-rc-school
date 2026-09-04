import Link from "next/link";
import { supabase } from "@/lib/supabase";

const academiaLevels = [
  {
    title: "Early Years Education",
    range: "PP1 – PP2",
    href: "/academia/early-years",
    description: "Foundational learning through play-based, competency-driven activities that build curiosity and core skills.",
  },
  {
    title: "Lower Primary",
    range: "Grade 1 – Grade 3",
    href: "/academia/lower-primary",
    description: "Building strong literacy, numeracy, and social foundations under the CBC framework.",
  },
  {
    title: "Upper Primary & Junior Secondary",
    range: "Grade 4 – Grade 9",
    href: "/academia/upper-primary",
    description: "Deepening core competencies and introducing specialized pathways as learners approach JSS.",
  },
];

const stats = [
  { label: "Total Students", value: "500+" },
  { label: "Qualified Teachers", value: "25+" },
  { label: "Years of Academic History", value: "30+" },
  { label: "Extra-Curricular Clubs", value: "10+" },
];

const facilities = ["Classrooms", "Sports Field", "Computer Room", "Library"];

export default async function Home() {
  const { data: newsPosts } = await supabase
    .from("news_posts")
    .select("id, title, slug, content, published_at")
    .order("published_at", { ascending: false })
    .limit(4);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Nurturing Academic Excellence
            <br className="hidden md:block" /> and Moral Values.
          </h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            A primary school in Webuye, dedicated to raising
            confident, well-rounded learners under the CBC curriculum.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/academia" className="bg-gold text-navy-dark font-semibold px-6 py-3 rounded hover:bg-gold-light transition">
              Explore Academia
            </Link>
            <Link href="/admissions" className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-navy transition">
              Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold">
            <h3 className="text-lg font-bold text-navy mb-2">CBC Curriculum Focus</h3>
            <p className="text-sm text-navy-dark/80">Competency-based learning that develops each learner&apos;s unique strengths from Early Years through Junior Secondary.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold">
            <h3 className="text-lg font-bold text-navy mb-2">Holistic & Spiritual Growth</h3>
            <p className="text-sm text-navy-dark/80">Rooted in Catholic values, guiding pupils to grow in character, faith, and community alongside academics.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold">
            <h3 className="text-lg font-bold text-navy mb-2">Co-Curricular & Sports Excellence</h3>
            <p className="text-sm text-navy-dark/80">A full calendar of sports, clubs, and societies that build teamwork, discipline, and lifelong interests.</p>
          </div>
        </div>
      </section>

      {/* Headteacher's Welcome */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="w-full aspect-[4/3] bg-navy-light/10 rounded-lg flex items-center justify-center text-navy-light border border-navy-light/20">
            <span className="text-sm">Headteacher photo goes here</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">A Message from Our Headteacher</h2>
            <p className="text-navy-dark/80 mb-4">Welcome to Matulo RC Primary School, where we are committed to nurturing every child&apos;s academic, moral, and spiritual growth. Our dedicated teachers and staff work together to create a warm, disciplined environment where pupils are encouraged to discover their potential and grow into responsible, faith-driven members of society.</p>
            <p className="font-semibold text-navy">— The Headteacher</p>
          </div>
        </div>
      </section>

      {/* Academia Levels Grid */}
      <section className="bg-navy-light/5 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy text-center mb-10">Academic Journey at Matulo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academiaLevels.map((level) => (
              <Link key={level.href} href={level.href} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border-b-4 border-gold block">
                <p className="text-xs font-semibold text-gold-dark uppercase mb-1">{level.range}</p>
                <h3 className="text-lg font-bold text-navy mb-2">{level.title}</h3>
                <p className="text-sm text-navy-dark/80">{level.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics Counter */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-gold">{stat.value}</p>
              <p className="text-sm text-white/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities / Life at Matulo */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-navy text-center mb-10">Life at Matulo</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div key={facility} className="text-center">
              <div className="aspect-square bg-navy-light/10 rounded-lg flex items-center justify-center border border-navy-light/20 text-navy-light text-sm mb-3">Photo</div>
              <p className="font-semibold text-navy">{facility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News & Events */}
      <section className="bg-navy-light/5 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Latest News</h2>
            <div className="space-y-4">
              {newsPosts && newsPosts.length > 0 ? (
                newsPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition"
                  >
                    <p className="text-xs text-gold-dark font-semibold mb-1">
                      {new Date(post.published_at).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    <h3 className="font-bold text-navy">{post.title}</h3>
                    <p className="text-sm text-navy-dark/70 mt-1 line-clamp-2">{post.content}</p>
                  </Link>
                ))
              ) : (
                <p className="text-navy-dark/60 text-sm">No news posted yet. Check back soon.</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Upcoming Events</h2>
            <ul className="bg-white rounded-lg shadow divide-y divide-navy-light/10">
              <li className="p-4 flex justify-between">
                <span className="text-navy-dark">Term 3 Opens</span>
                <span className="text-gold-dark font-semibold text-sm">Sep 8</span>
              </li>
              <li className="p-4 flex justify-between">
                <span className="text-navy-dark">Annual Sports Day</span>
                <span className="text-gold-dark font-semibold text-sm">Oct 15</span>
              </li>
              <li className="p-4 flex justify-between">
                <span className="text-navy-dark">CBC Parents&apos; Orientation</span>
                <span className="text-gold-dark font-semibold text-sm">Nov 2</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
