import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-6xl font-bold text-gold mb-4">404</p>
      <h1 className="text-2xl font-bold text-navy mb-4">Page Not Found</h1>
      <p className="text-navy-dark/70 mb-8">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or may
        have been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-gold text-navy-dark font-semibold px-6 py-3 rounded hover:bg-gold-light transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
