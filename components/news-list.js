import Link from "next/link";
import Image from "next/image";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((article) => (
        <li key={article.id}>
          <Link href={`/news/${article.slug}`}>
            <Image
              src={`/images/news/${article.image}`}
              alt={article.title}
              width="200"
              height="200"
            />
            <span>{article.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
