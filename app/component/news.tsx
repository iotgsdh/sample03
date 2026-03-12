"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Data {
  data: { contents: { createdAt: string; id: string; title: string }[] };
}

export default function News({ data }: Data) {
  const [index, setIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const liRef = useRef<HTMLLIElement | null>(null);

  const loopList = [...data.contents, data.contents[0]];

  //   自動スライド
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => {
      clearInterval(id);
    };
  }, []);

  //   ループ処理
  useEffect(() => {
    if (index === data.contents.length) {
      setTimeout(() => {
        setIsTransition(false);
        setIndex(0);
      }, 400);
    }

    setTimeout(() => {
      setIsTransition(true);
    }, 450);
  }, [index, data.contents.length]);

  return (
    <ul className="h-11 overflow-hidden md:h-6">
      {loopList.map((content, i) => {
        const date = new Date(content.createdAt);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${y}.${m}.${d}`;

        return (
          <li
            key={i}
            ref={liRef}
            style={{
              translate: `0 -${index * 100}%`,
              transition: isTransition ? "translate 0.4s ease-in-out" : "none",
            }}
          >
            <Link
              href={`/pages/news/${content.id}`}
              className="md:flex md:items-center md:gap-x-4"
            >
              <div className="text-sm">
                <time dateTime={content.createdAt}>{formattedDate}</time>
              </div>
              <h3 className="truncate underline underline-offset-4">
                {content.title}
              </h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
