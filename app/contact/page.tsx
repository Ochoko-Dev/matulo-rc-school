export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-navy mb-6">Contact Us</h1>
      <p className="text-navy-dark/80 mb-12">
        We&apos;d love to hear from you. Reach out with any questions about
        admissions, academics, or school life at Matulo RC Primary School.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h2 className="font-bold text-navy mb-1">Phone</h2>
            <p className="text-navy-dark/80 text-sm">+254 700 000 000</p>
          </div>
          <div>
            <h2 className="font-bold text-navy mb-1">Email</h2>
            <p className="text-navy-dark/80 text-sm">info@matulorcschool.ac.ke</p>
          </div>
          <div>
            <h2 className="font-bold text-navy mb-1">Address</h2>
            <p className="text-navy-dark/80 text-sm">Matulo, Nyeri County, Kenya</p>
          </div>
          <div>
            <h2 className="font-bold text-navy mb-1">Office Hours</h2>
            <p className="text-navy-dark/80 text-sm">Monday – Friday, 8:00 AM – 4:00 PM</p>
          </div>
        </div>

        <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow">
          <iframe
            title="Matulo RC Primary School Location"
            src="https://www.google.com/maps?q=Nyeri,Kenya&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
