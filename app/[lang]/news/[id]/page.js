import NewsDetails from "@/components/NewsDetails";

export default function NewsDetailsPage({ params }) {
  const { id, lang } = params;

  return (
    <>
      <NewsDetails id={id} lang={lang} />
    </>
  );
}
