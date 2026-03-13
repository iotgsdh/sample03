import Link from "next/link";

export const Pagination = ({
  totalCount,
  limit,
  currentPage,
}: {
  totalCount: number;
  limit: number;
  currentPage: number;
}) => {
  const PER_PAGE = limit;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex justify-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          {currentPage === number ? (
            <span className="block p-2 text-gray-400">{number}</span>
          ) : (
            <Link href={`/pages/news/${number}`} className="block p-2">
              {number}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
