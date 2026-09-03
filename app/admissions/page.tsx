import AdmissionsForm from "@/components/AdmissionsForm";

const steps = [
  {
    title: "1. Inquire",
    description: "Fill out the inquiry form below or visit the school office to express interest in enrolling your child.",
  },
  {
    title: "2. School Visit",
    description: "Book a visit to tour the school, meet staff, and see our facilities and classrooms firsthand.",
  },
  {
    title: "3. Submit Documents",
    description: "Provide the required admission documents (birth certificate, previous school records, medical form, passport photos).",
  },
  {
    title: "4. Confirmation & Enrollment",
    description: "Once accepted, complete enrollment formalities and fee payment to secure your child's place.",
  },
];

export default function Admissions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">Admissions</h1>
      <p className="text-navy-dark/80 mb-12">
        We welcome inquiries from parents and guardians looking to enroll
        their children at Matulo RC Primary School. Follow the steps below
        to begin the admissions process.
      </p>

      <h2 className="text-xl font-bold text-navy mb-6">Enrollment Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {steps.map((step) => (
          <div key={step.title} className="bg-white rounded-lg shadow p-5 border-l-4 border-gold">
            <h3 className="font-bold text-navy mb-1">{step.title}</h3>
            <p className="text-sm text-navy-dark/70">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-navy-light/5 rounded-lg p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-navy">Admission Requirements Checklist</h3>
          <p className="text-sm text-navy-dark/70">Download the full checklist of documents needed for enrollment.</p>
        </div>
        <a href="/admissions-checklist.pdf" className="bg-gold text-navy-dark font-semibold px-5 py-2.5 rounded hover:bg-gold-light transition whitespace-nowrap">
          Download Checklist (PDF)
        </a>
      </div>

      <h2 className="text-xl font-bold text-navy mb-6">Admissions Inquiry Form</h2>
      <AdmissionsForm />
    </main>
  );
}
