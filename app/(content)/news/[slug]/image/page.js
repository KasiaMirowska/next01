import { getNewsItem } from "@/lib/getNews";
import { notFound } from "next/navigation";

export default async function PicturePage({ params }) {
  const newsItemSlug = await params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
