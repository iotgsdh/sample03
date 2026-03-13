import { Pagination } from "@/app/components/pagination";
import { client } from "@/libs/client";
import Link from "next/link";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) {
  const id = Number((await params).newsId);
  const limit = 5;
  const data = await client.get({
    endpoint: "news",
    queries: { offset: (id - 1) * limit, limit: limit },
  });
  const totalCount = data.totalCount;

  return (
    <main>
      <section className="bg03 bg04 relative flex min-h-screen items-center justify-center py-16 lg:py-(--headerHeight)">
        <div className="inner relative z-10">
          <h1 className="mb-4 text-2xl font-bold">NEWS</h1>
          <div className="mb-8">
            {data.contents.map(
              (
                content: { createdAt: string; id: string; title: string },
                i: number,
              ) => {
                const date = new Date(content.createdAt);
                const y = date.getFullYear();
                const m = String(date.getMonth() + 1).padStart(2, "0");
                const d = String(date.getDate()).padStart(2, "0");
                const formattedDate = `${y}.${m}.${d}`;

                return (
                  <article key={i}>
                    <Link
                      href={`/pages/news/${id}/${content.id}`}
                      className="block border-be py-4"
                    >
                      <div className="text-sm">
                        <time dateTime={content.createdAt}>
                          {formattedDate}
                        </time>
                      </div>
                      <h2 className="font-bold">{content.title}</h2>
                    </Link>
                  </article>
                );
              },
            )}
          </div>
          <Pagination totalCount={totalCount} limit={limit} currentPage={id} />
        </div>
      </section>
    </main>
  );
}
