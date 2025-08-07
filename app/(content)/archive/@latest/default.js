import { getLatestNews } from "@/lib/getNews";
import NewList from "@/components/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewList news={latestNews} />
    </>
  );
}
