import Featured from "@/components/Featured";
import MarqueeBanner from "@/components/MarqueeBanner";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/news");
  const newsData = await res.json();

  return (
    <div>
      <MarqueeBanner />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Featured />
        <section>
          <h2 className="text-2xl font-bold mb-8">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsList newsData={newsData} />
          </div>
        </section>
      </main>
    </div>
  );
}
