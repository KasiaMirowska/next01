import NewsList from "../../../components/news-list";
import { getAllNews } from "@/lib/getNews";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <header>
        <h1>News Page</h1>
      </header>
      <NewsList news={news} />;
    </>
  );
}
