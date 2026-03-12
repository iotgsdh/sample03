import { client } from "@/libs/client";
import Link from "next/link";

export default async function NewsPage() {
  const data = await client.get({
    endpoint: "news",
  });

  return (
    <main>
      <section className="bg03 bg04 relative flex min-h-screen items-center justify-center py-16">
        <div className="inner relative z-10">
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
                    href={`/pages/news/${content.id}`}
                    className="block border-be py-4"
                  >
                    <div className="text-sm">
                      <time dateTime={content.createdAt}>{formattedDate}</time>
                    </div>
                    <h2 className="font-bold">{content.title}</h2>
                  </Link>
                </article>
              );
            },
          )}
        </div>
      </section>
    </main>
  );
}
