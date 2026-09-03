export default function StudentLife() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">Student Life & Co-Curricular</h1>
      <p className="text-navy-dark/80 mb-12">
        Life at Matulo goes beyond the classroom. We believe co-curricular
        activities, sports, and pastoral care are essential to raising
        well-rounded learners who grow in confidence, teamwork, and
        character.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-4">Sports & Athletics</h2>
        <p className="text-navy-dark/80 text-sm mb-4">
          Our pupils take part in a full calendar of athletics, football,
          netball, and inter-house competitions, building discipline,
          teamwork, and healthy habits.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-4">Clubs, Societies & Pastoral Care</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-navy-dark/80">
          <div className="bg-white rounded shadow p-4 border-l-4 border-gold">Catholic Young Christian Students (YCS)</div>
          <div className="bg-white rounded shadow p-4 border-l-4 border-gold">Debate & Public Speaking Club</div>
          <div className="bg-white rounded shadow p-4 border-l-4 border-gold">Environmental / 4K Club</div>
          <div className="bg-white rounded shadow p-4 border-l-4 border-gold">Music & Drama Club</div>
          <div className="bg-white rounded shadow p-4 border-l-4 border-gold">Guidance & Counseling</div>
          <div className="bg-white rounded shadow p-4 border-l-4 border-gold">Spiritual & Pastoral Care Program</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-4">Facilities & Environment</h2>
        <p className="text-navy-dark/80 text-sm">
          Our campus provides a safe, well-maintained environment with
          spacious classrooms, a sports field, a computer room, and a
          library, all supporting a rich learning experience beyond
          academics.
        </p>
      </section>
    </main>
  );
}
