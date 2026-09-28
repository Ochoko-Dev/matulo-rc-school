export default function NewsLoading() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="h-8 w-64 bg-navy-light/10 rounded animate-pulse mb-10" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-5 border-l-4 border-gold/30">
            <div className="h-3 w-32 bg-navy-light/10 rounded animate-pulse mb-3" />
            <div className="h-5 w-3/4 bg-navy-light/10 rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-navy-light/10 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </main>
  );
}
