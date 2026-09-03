export default function LowerPrimary() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold text-gold-dark uppercase mb-2">Grade 1 – Grade 3</p>
      <h1 className="text-3xl font-bold text-navy mb-6">Lower Primary</h1>
      <p className="text-navy-dark/80 mb-4">
        Lower Primary builds on the foundation laid in Early Years,
        strengthening literacy and numeracy while introducing learners to a
        broader range of subjects under the CBC framework.
      </p>
      <p className="text-navy-dark/80 mb-10">
        Continuous assessment at this stage helps teachers identify each
        learner&apos;s strengths early, allowing for individualized support
        where needed.
      </p>

      <h2 className="text-xl font-bold text-navy mb-4">Core Learning Areas</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-navy-dark/80 text-sm">
        <li className="bg-white rounded shadow p-3">Literacy & English</li>
        <li className="bg-white rounded shadow p-3">Kiswahili / Kenya Sign Language</li>
        <li className="bg-white rounded shadow p-3">Mathematics</li>
        <li className="bg-white rounded shadow p-3">Environmental Activities</li>
        <li className="bg-white rounded shadow p-3">Creative Activities</li>
        <li className="bg-white rounded shadow p-3">Religious Education</li>
      </ul>
    </main>
  );
}
