import { client } from "@/libs/client";

export default async function NewsPage() {
  const data = await client.get({
    endpoint: "news",
  });

  return <main></main>;
}
