import { getDate } from "@/utils/getDate";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ news }) {
  return (
    <Link href={`news/${news.article_id}`}>
      <article className="bg-white rounded-lg shadow-sm overflow-hidden news-card">
        <Image
          src={news.image_url || "https://placehold.co/228x192"}
          alt="Technology news"
          className="w-full object-cover"
          width={288}
          height={192}
        />

        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            {news.category.map((categoryName) => (
              <span
                key={categoryName}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
              >
                {categoryName}
              </span>
            ))}
            <span className="text-xs text-gray-500">3 min read</span>
          </div>
          <h3 className="text-xl font-medium mb-3 leading-tight">
            {news.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed truncate">
            {news.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div>
                <Image
                  className="rounded-full  bg-gray-200 "
                  src={news.avatar}
                  width={28}
                  height={28}
                  alt={news.author}
                />
              </div>
              <span className="text-xs text-gray-500">{news.author}</span>
            </div>
            <span className="text-xs text-gray-400">
              {getDate(news.pubDate)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
