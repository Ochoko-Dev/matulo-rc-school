export default function UpperPrimary() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold text-gold-dark uppercase mb-2">Grade 4 – Grade 9</p>
      <h1 className="text-3xl font-bold text-navy mb-6">Upper Primary & Junior Secondary</h1>
      <p className="text-navy-dark/80 mb-4">
        As learners progress into Upper Primary and Junior Secondary, the
        curriculum deepens subject mastery and begins introducing pathway
        subjects that align with each learner&apos;s emerging strengths and
        interests, in line with CBC&apos;s Junior Secondary structure.
      </p>
      <p className="text-navy-dark/80 mb-10">
        Our teachers continue close, competency-based assessment through
        this stage to ensure every learner is well prepared for the
        transition into Senior School.
      </p>

      <h2 className="text-xl font-bold text-navy mb-4">Core Learning Areas</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-navy-dark/80 text-sm">
        <li className="bg-white rounded shadow p-3">English & Kiswahili</li>
        <li className="bg-white rounded shadow p-3">Mathematics</li>
        <li className="bg-white rounded shadow p-3">Integrated Science</li>
        <li className="bg-white rounded shadow p-3">Social Studies</li>
        <li className="bg-white rounded shadow p-3">Pre-Technical & Pre-Career Education</li>
        <li className="bg-white rounded shadow p-3">Religious Education</li>
      </ul>
    </main>
  );
}
