import { getLatestNews } from "@/lib/getNews";
import NewList from "@/components/news-list";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewList news={latestNews} />
    </>
  );
}
