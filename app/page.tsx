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
    </main>
  );
}
