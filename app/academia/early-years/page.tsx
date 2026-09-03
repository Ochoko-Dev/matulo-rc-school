export default function EarlyYears() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold text-gold-dark uppercase mb-2">PP1 – PP2</p>
      <h1 className="text-3xl font-bold text-navy mb-6">Early Years Education</h1>
      <p className="text-navy-dark/80 mb-4">
        Our Early Years program lays the foundation for lifelong learning
        through play-based, hands-on activities that develop curiosity,
        language, numeracy, and social skills in a nurturing environment.
      </p>
      <p className="text-navy-dark/80 mb-10">
        Learners at this stage are guided gently into structured learning
        routines, building confidence and independence as they prepare for
        Lower Primary.
      </p>

      <h2 className="text-xl font-bold text-navy mb-4">Core Learning Areas</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-navy-dark/80 text-sm">
        <li className="bg-white rounded shadow p-3">Language Activities</li>
        <li className="bg-white rounded shadow p-3">Mathematical Activities</li>
        <li className="bg-white rounded shadow p-3">Environmental Activities</li>
        <li className="bg-white rounded shadow p-3">Psychomotor & Creative Activities</li>
        <li className="bg-white rounded shadow p-3">Religious Education</li>
      </ul>
    </main>
  );
}
