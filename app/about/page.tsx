import Link from "next/link";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">About Matulo RC Primary School</h1>
      <p className="text-navy-dark/80 mb-4">
        Matulo RC Primary School is a Catholic-sponsored public primary
        school committed to nurturing academic excellence alongside strong
        moral and spiritual values. For decades, we have guided learners
        through a holistic education that prepares them for both examinations
        and life beyond the classroom.
      </p>
      <p className="text-navy-dark/80 mb-10">
        Our approach blends the Competency-Based Curriculum with a caring,
        disciplined environment rooted in our Catholic identity, giving
        every pupil the foundation to grow into a confident, principled
        member of society.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/about/history"
          className="bg-white rounded-lg shadow p-6 border-b-4 border-gold hover:shadow-lg transition block"
        >
          <h2 className="text-lg font-bold text-navy mb-2">History & Catholic Identity</h2>
          <p className="text-sm text-navy-dark/70">
            Learn about our founding, our Catholic sponsorship, and the
            values that continue to guide us today.
          </p>
        </Link>
        <Link
          href="/about/administration"
          className="bg-white rounded-lg shadow p-6 border-b-4 border-gold hover:shadow-lg transition block"
        >
          <h2 className="text-lg font-bold text-navy mb-2">Administration & BOM</h2>
          <p className="text-sm text-navy-dark/70">
            Meet the school administration and Board of Management guiding
            Matulo RC Primary School.
          </p>
        </Link>
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-navy mb-2">Our Vision</h3>
          <p className="text-sm text-navy-dark/70">
            To be a leading Catholic primary school forming learners of
            academic excellence and strong moral character.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-navy mb-2">Our Mission</h3>
          <p className="text-sm text-navy-dark/70">
            To nurture every learner holistically through quality CBC
            education grounded in Catholic values.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-navy mb-2">Core Values</h3>
          <p className="text-sm text-navy-dark/70">
            Faith, Integrity, Excellence, Discipline, and Community.
          </p>
        </div>
      </section>
    </main>
  );
}
