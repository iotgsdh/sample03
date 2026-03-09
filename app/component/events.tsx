"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const events = [
  {
    url: "drew-dizzy-graham-PVyhz0wmHdo-unsplash.jpg",
    title: "CITY VORTEX SHOWCASE 2026",
  },
  {
    url: "michael-afonso-z8Tul255kGg-unsplash.jpg",
    title: "IGNITE GLOBAL SESSION 2026",
  },
  {
    url: "photographer-frederik-trovatten-vk7p_G3ustg-unsplash.jpg",
    title: "URBAN RISE BATTLE 2026",
  },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const loopEvents = [...events, events[0]];

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
    if (index === events.length) {
      setTimeout(() => {
        setIsTransition(false);
        setIndex(0);
      }, 400);
    }

    setTimeout(() => {
      setIsTransition(true);
    }, 450);
  }, [index]);

  return (
    <div>
      <div className="mb-4 flex overflow-x-hidden md:mx-auto md:w-[75%] lg:mb-8 lg:w-[60%]">
        {loopEvents.map((event, i) => (
          <div
            key={i}
            style={{
              translate: `-${index * 100}% 0`,
              transition: isTransition ? "translate 0.4s ease-in-out" : "none",
            }}
            className="w-full shrink-0"
          >
            <Link href={"#"}>
              <div className="mb-2">
                <Image
                  src={`/images/${event.url}`}
                  width={600}
                  height={410}
                  alt={event.title}
                  className="w-full"
                />
              </div>
              <h3 className="text-background font-bold lg:text-2xl">
                {event.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-2">
        <span
          className={`block size-2 rounded-full ${index === 0 || index === 3 ? "bg-white" : "bg-gray-400"}`}
        ></span>
        <span
          className={`block size-2 rounded-full ${index === 1 ? "bg-white" : "bg-gray-400"}`}
        ></span>
        <span
          className={`block size-2 rounded-full ${index === 2 ? "bg-white" : "bg-gray-400"}`}
        ></span>
      </div>
    </div>
  );
}
