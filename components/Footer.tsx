export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-gold mb-2">Matulo RC Primary School</h3>
          <p>Nurturing Academic Excellence and Moral Values.</p>
        </div>
        <div>
          <h3 className="font-bold text-gold mb-2">Contact</h3>
          <p>📞 +254 700 000 000</p>
          <p>✉️ info@matulorcschool.ac.ke</p>
          <p>📍 Matulo, Nyeri County</p>
        </div>
        <div>
          <h3 className="font-bold text-gold mb-2">Quick Links</h3>
          <p>Admissions</p>
          <p>Academic Calendar</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 py-4 border-t border-white/10">
        © {new Date().getFullYear()} Matulo RC Primary School. All rights reserved.
      </div>
    </footer>
  );
}
