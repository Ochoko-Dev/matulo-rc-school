import Link from "next/link";

export const metadata = {
  title: "Academia | Matulo RC Primary School",
  description: "Explore the CBC curriculum at Matulo RC Primary School, from Early Years through Junior Secondary.",
};

const levels = [
  {
    title: "Early Years Education",
    range: "PP1 – PP2",
    href: "/academia/early-years",
    description: "Foundational, play-based learning that builds curiosity, basic literacy and numeracy, and social skills.",
  },
  {
    title: "Lower Primary",
    range: "Grade 1 – Grade 3",
    href: "/academia/lower-primary",
    description: "Strengthening core literacy, numeracy, and life-skill competencies under the CBC framework.",
  },
  {
    title: "Upper Primary & Junior Secondary",
    range: "Grade 4 – Grade 9",
    href: "/academia/upper-primary",
    description: "Deepening subject mastery and introducing pathway subjects as learners approach Junior Secondary.",
  },
];

export default function Academia() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">Academia at Matulo</h1>
      <p className="text-navy-dark/80 mb-4">
        Matulo RC Primary School follows the Competency-Based Curriculum
        (CBC), designed to nurture each learner&apos;s individual strengths
        through practical, skills-focused learning rather than rote
        memorization.
      </p>
      <p className="text-navy-dark/80 mb-10">
        Our teachers use continuous assessment to track progress across
        core learning areas, ensuring every pupil receives the individual
        attention needed to thrive academically and personally.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {levels.map((level) => (
          <Link
            key={level.href}
            href={level.href}
            className="bg-white rounded-lg shadow p-6 border-l-4 border-gold hover:shadow-lg transition block"
          >
            <p className="text-xs font-semibold text-gold-dark uppercase mb-1">{level.range}</p>
            <h2 className="text-lg font-bold text-navy mb-2">{level.title}</h2>
            <p className="text-sm text-navy-dark/70">{level.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
