import { client } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";

export default async function SinglePage({
  params,
}: {
  params: Promise<{ newsId: number; postId: string }>;
}) {
  const newsId = (await params).newsId;
  const postId = (await params).postId;
  const data = await client.get({
    endpoint: "news",
    contentId: postId,
  });

  const date = new Date(data.createdAt);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${y}.${m}.${d}`;

  return (
    <main>
      <div className="bg03 bg04 relative flex min-h-screen items-center justify-center py-16 lg:py-(--headerHeight)">
        <div className="inner relative z-10 lg:w-2xl">
          <div className="text-sm">
            <time dateTime={data.createdAt}>{formattedDate}</time>
          </div>
          <h1 className="mb-4 font-bold">{data.title}</h1>
          <div className="mb-4">
            <Image
              src={data.image.url}
              width={data.image.width}
              height={data.image.height}
              alt=""
              className="lg:aspect-4/3 lg:object-contain"
            />
          </div>
          <p className="mb-8 md:mb-16">{data.content}</p>
          <div className="flex justify-center">
            <Link
              href={`/pages/news/${newsId}`}
              className="flex items-center text-lg font-bold"
            >
              <div className="size-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                >
                  <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                </svg>
              </div>
              Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
