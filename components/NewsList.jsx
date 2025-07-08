import NewsCard from "./NewsCard";

export default function NewsList({ newsData }) {
  return (
    <>
      {newsData.map((news, i) => (
        <NewsCard key={i} news={news}></NewsCard>
      ))}
    </>
  );
}
