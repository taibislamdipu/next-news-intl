import Image from "next/image";

export default async function NewsDetails({ id }) {
  const res = await fetch(`http://localhost:3000/api/news/${id}`);
  const newsData = await res.json();

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* <!-- Article Content --> */}
          <article className="lg:col-span-3">
            {/* <!-- Article Header --> */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
                {newsData.title}
              </h1>
            </header>

            {/* <!-- Article Image --> */}
            <div className="mb-8">
              <Image
                src={newsData.image_url || "https://placehold.co/800x600"}
                alt="Ferris wheel against sky"
                className="rounded-lg shadow-sm"
                width={800}
                height={600}
              />
            </div>

            {/* <!-- Article Body --> */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                {newsData.description}
              </p>

              <p className="text-lg leading-relaxed mb-8">{newsData.content}</p>
            </div>

            {/* <!-- Social Actions --> */}
            <div className="flex items-center space-x-6 mb-8">
              <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>7 min read</span>
              </div>
            </div>
          </article>

          {/* <!-- Sidebar --> */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* <!-- Author Info --> */}
              <div>
                <h3 className="text-lg font-medium mb-2">Yagami Sonichrou</h3>
                <p className="text-sm text-gray-600 mb-4">
                  January 30, 2024 9:43 am ET
                </p>
              </div>

              {/* <!-- Comments --> */}
              <div>
                <p className="text-lg font-medium mb-2">38 comments</p>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Join the discussion
                </a>
              </div>

              {/* <!-- Category --> */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Category</p>
                <p className="font-medium">Acute Social Issues</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
