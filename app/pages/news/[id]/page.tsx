import { client } from "@/libs/client";

export default async function SinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });

  return <main></main>;
}
