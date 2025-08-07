import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/getNews";
import NewsList from "@/components/news-list";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter; //holds an array of all matched path segments, not just 1param like before

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();
  let newsContent = <p>No news found for the selected period</p>;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(Number(selectedMonth)))
  ) {
    throw new Error("Invalid Filter");
  }

  console.log("NRE", news);

  return (
    <>
      <h1 id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </h1>
      {newsContent}
    </>
  );
}
