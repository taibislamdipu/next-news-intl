import NewsDetails from "@/components/NewsDetails";

export default function NewsDetailsPage({ params }) {
  const { id } = params;

  return (
    <>
      <NewsDetails id={id} />
    </>
  );
}
