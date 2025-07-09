import Image from "next/image";

export default async function ModalContent({ id }) {
  const res = await fetch(`${process.env.BASE_API_URL}/news/${id}`);
  const newsData = await res.json();

  return (
    <div>
      <div className="inset-0 bg-black/50 h-screen z-50">
        <article className="h-fit max-w-4xl mx-auto px-4 bg-white pb-8">
          <header className="py-4 sticky top-0 bg-white z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              {newsData.title}
            </h1>
          </header>
          <div className="mb-8">
            <div className="w-full h-96 relative">
              <Image
                src={newsData.image_url || "/assets/placeholder-img.png"}
                alt={newsData.title}
                className="rounded-lg shadow-sm object-contain bg-gray-100"
                fill
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">{newsData.content}</p>
          </div>

          <div className="flex items-center space-x-6">
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
      </div>
    </div>
  );
}
