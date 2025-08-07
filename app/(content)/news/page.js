import { DUMMY_NEWS } from "../../../dummy-news";
import NewsList from "../../../components/news-list";

export default function NewsPage() {
  return (
    <>
      <header>
        <h1>News Page</h1>
      </header>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
