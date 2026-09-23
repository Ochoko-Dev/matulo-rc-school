export const metadata = {
  title: "Academic Calendar | Matulo FYM Primary School",
  description: "Key term dates and academic calendar for Matulo FYM Primary School.",
};

export default function AcademicCalendar() {
  const terms = [
    { term: "Term 1", opens: "January", closes: "April" },
    { term: "Term 2", opens: "May", closes: "August" },
    { term: "Term 3", opens: "September", closes: "November" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">Academic Calendar</h1>
      <p className="text-navy-dark/80 mb-10">
        Key term dates for the current school year. Exact dates follow the
        official Ministry of Education school calendar and may be adjusted
        accordingly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {terms.map((t) => (
          <div key={t.term} className="bg-white rounded-lg shadow p-6 border-t-4 border-gold">
            <h2 className="text-lg font-bold text-navy mb-2">{t.term}</h2>
            <p className="text-sm text-navy-dark/70">Opens: {t.opens}</p>
            <p className="text-sm text-navy-dark/70">Closes: {t.closes}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-navy-dark/60 mt-10">
        For specific dates and any mid-term breaks, please check the News &
        Events page or contact the school office.
      </p>
    </main>
  );
}
