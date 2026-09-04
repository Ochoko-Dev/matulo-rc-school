export default function Administration() {

export const metadata = {
  title: "Administration & BOM | Matulo RC Primary School",
  description: "Meet the administration and Board of Management at Matulo RC Primary School.",
};
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">School Administration & Board of Management</h1>
      <p className="text-navy-dark/80 mb-10">
        Matulo RC Primary School is guided by a dedicated administration and
        Board of Management (BOM) committed to the school&apos;s academic
        standards, welfare, and Catholic identity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-gold">
          <h2 className="text-lg font-bold text-navy mb-2">Headteacher</h2>
          <p className="text-sm text-navy-dark/70">
            Oversees the day-to-day academic and administrative operations
            of the school.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-gold">
          <h2 className="text-lg font-bold text-navy mb-2">Deputy Headteacher</h2>
          <p className="text-sm text-navy-dark/70">
            Supports the Headteacher in curriculum implementation and
            student welfare.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-gold">
          <h2 className="text-lg font-bold text-navy mb-2">Board of Management</h2>
          <p className="text-sm text-navy-dark/70">
            A committee of parents, sponsors, and community representatives
            overseeing governance and school development.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-gold">
          <h2 className="text-lg font-bold text-navy mb-2">Catholic Sponsor Representative</h2>
          <p className="text-sm text-navy-dark/70">
            Ensures the school&apos;s programs remain aligned with its
            Catholic identity and values.
          </p>
        </div>
      </div>
    </main>
  );
}
