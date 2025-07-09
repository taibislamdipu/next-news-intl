import { getDictionary } from "@/app/[lang]/dictionaries";
import { getDate } from "@/utils/getDate";
import Image from "next/image";

export default async function NewsDetails({ id, lang }) {
  const res = await fetch(`${process.env.BASE_API_URL}/news/${id}`);
  const newsData = await res.json();

  const dictionary = await getDictionary(lang);

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
                {newsData.title}
              </h1>
            </header>

            <div className="mb-8">
              <Image
                src={newsData.image_url || "/assets/placeholder-img.png"}
                alt={newsData.title}
                className="rounded-lg shadow-sm"
                width={800}
                height={600}
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                {newsData.description}
              </p>

              <p className="text-lg leading-relaxed mb-8">{newsData.content}</p>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span>Share</span>
              </button>

              <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span>Bookmark</span>
              </button>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>7 min read</span>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">{newsData.author}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {getDate(newsData.pubDate)}
                </p>
              </div>

              <div>
                <p className="text-lg font-medium mb-2">
                  38 {dictionary.comments}
                </p>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Join the discussion
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Category</p>
                {newsData.category.map((categoryName) => (
                  <p key={categoryName} className="font-medium capitalize mr-2">
                    {categoryName}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
