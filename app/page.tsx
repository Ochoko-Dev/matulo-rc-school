import Link from "next/link";

export default function Home() {
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
            A Catholic-sponsored primary school in Nyeri, dedicated to raising
            confident, well-rounded learners under the CBC curriculum.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/academia"
              className="bg-gold text-navy-dark font-semibold px-6 py-3 rounded hover:bg-gold-light transition"
            >
              Explore Academia
            </Link>
            <Link
              href="/admissions"
              className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-navy transition"
            >
              Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Cards — overlapping the hero bottom edge */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold">
            <h3 className="text-lg font-bold text-navy mb-2">CBC Curriculum Focus</h3>
            <p className="text-sm text-navy-dark/80">
              Competency-based learning that develops each learner&apos;s
              unique strengths from Early Years through Junior Secondary.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold">
            <h3 className="text-lg font-bold text-navy mb-2">Holistic & Spiritual Growth</h3>
            <p className="text-sm text-navy-dark/80">
              Rooted in Catholic values, guiding pupils to grow in character,
              faith, and community alongside academics.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gold">
            <h3 className="text-lg font-bold text-navy mb-2">Co-Curricular & Sports Excellence</h3>
            <p className="text-sm text-navy-dark/80">
              A full calendar of sports, clubs, and societies that build
              teamwork, discipline, and lifelong interests.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
