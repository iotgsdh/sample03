import { client } from "@/libs/client";
import { ReactNode } from "react";
import parse from "html-react-parser";

export default async function VideoPage() {
  const data = await client.get({
    endpoint: "video",
  });

  return (
    <main>
      <section className="bg03 bg04 relative flex min-h-screen items-center justify-center py-16 lg:py-(--headerHeight)">
        <div className="relative z-10 px-4">
          <h1 className="mb-4 text-2xl font-bold">VIDEO</h1>
          <div className="mb-8 md:grid md:grid-cols-2 xl:grid-cols-3">
            {data.contents.map(
              (content: { title: string; video: string }, i: number) => (
                <article
                  key={i}
                  className="py-4 md:row-span-2 md:grid md:grid-rows-subgrid md:px-4"
                >
                  <h2 className="text-lg font-bold">{content.title}</h2>
                  <div>{parse(content.video)}</div>
                </article>
              ),
            )}
          </div>
          <p className="text-end text-sm">※動画はYouTubeより引用</p>
        </div>
      </section>
    </main>
  );
}
