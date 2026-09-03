import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-navy-light/20">
      {/* Utility bar */}
      <div className="bg-navy text-white text-sm">
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-4">
            <span>📞 +254 700 000 000</span>
            <span>✉️ info@matulorcschool.ac.ke</span>
            <span>📍 Matulo, Nyeri</span>
          </div>
          <Link
            href="/admissions"
            className="bg-gold text-navy-dark font-semibold px-3 py-1 rounded hover:bg-gold-light transition"
          >
            Admissions / Apply Now
          </Link>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-navy">
          Matulo RC Primary School
        </Link>
        <ul className="hidden md:flex gap-6 text-navy-dark font-medium">
          <li><Link href="/" className="hover:text-gold-dark">Home</Link></li>
          <li><Link href="/about" className="hover:text-gold-dark">About Us</Link></li>
          <li><Link href="/academia" className="hover:text-gold-dark">Academia</Link></li>
          <li><Link href="/student-life" className="hover:text-gold-dark">Student Life</Link></li>
          <li><Link href="/news" className="hover:text-gold-dark">News & Events</Link></li>
          <li><Link href="/contact" className="hover:text-gold-dark">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
