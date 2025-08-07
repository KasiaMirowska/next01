import { Suspense } from "react";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/getNews";
import NewsList from "@/components/news-list";
import Link from "next/link";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;
  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid Filter");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }
  const availableMonths = year ? await getAvailableNewsMonths(year) : [];

  return (
    <h1 id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </h1>
  );
}

async function FilteredNewsList({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (!news || news.length === 0) {
    return <p>No news found for the selected period</p>;
  }

  return <NewsList news={news} />;
}

export default async function FilteredNewsPage(props) {
  const { params } = props;
  const filter = params?.filter ?? []; //holds an array of all matched path segments, not just 1param like before

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news archives...</p>}>
        <FilteredNewsList year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
