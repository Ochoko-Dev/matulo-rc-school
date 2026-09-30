import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-gold mb-2">Matulo FYM Primary School</h3>
          <p>Nurturing Academic Excellence and Moral Values.</p>
        </div>
        <div>
          <h3 className="font-bold text-gold mb-2">Contact</h3>
          <p>📞 +254 700 686 549</p>
          <p>✉️ matulofymschool8@gmail.com / matulofymschool9@gmail.com</p>
          <p>📍 P.O. Box 621-50205, Webuye</p>
        </div>
        <div>
          <h3 className="font-bold text-gold mb-2">Quick Links</h3>
          <p><Link href="/admissions" className="hover:text-gold-light">Admissions</Link></p>
          <p><Link href="/academic-calendar" className="hover:text-gold-light">Academic Calendar</Link></p>
          <p><Link href="/contact" className="hover:text-gold-light">Contact Us</Link></p>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 py-4 border-t border-white/10">
        © {new Date().getFullYear()} Matulo FYM Primary School. All rights reserved.
      </div>
    </footer>
  );
}
