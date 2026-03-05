"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { items } from "@/app/constants";
import { mediaQuery, useMediaQuery } from "@/app/media-query";

function Nav() {
  const listItems = items.map((item, i) => (
    <li key={i} className="md:w-[50%] md:justify-center lg:w-auto">
      <Link
        href={item.path}
        className="text-background block p-4 text-lg font-bold md:text-center lg:px-4 lg:py-0 lg:text-xl"
      >
        {item.en}
        <span className="block text-sm lg:text-xs">{item.ja}</span>
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className="md:flex md:flex-wrap lg:flex-nowrap lg:justify-center">
        {listItems}
      </ul>
    </nav>
  );
}

function Contact() {
  return (
    <div className="flex justify-center py-4 lg:py-0">
      <Link
        href={"#"}
        className="text-background block rounded-md border px-4 py-2 text-center text-lg font-bold lg:text-sm"
      >
        CONTACT
        <span className="block text-center text-sm lg:text-xs">
          お問い合わせ
        </span>
      </Link>
    </div>
  );
}

function Account() {
  return (
    <div className="flex items-center justify-evenly py-4 lg:gap-x-4 lg:py-0">
      <div>
        <Link
          href={"#"}
          className="text-background flex flex-col items-center text-sm font-bold lg:text-xs"
        >
          <div className="fill-background w-8 lg:w-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
            </svg>
          </div>
          MY PAGE
        </Link>
      </div>
      <div>
        <Link
          href={"#"}
          className="text-background block rounded-md bg-gray-400 px-4 py-2 text-lg font-bold lg:px-2 lg:py-1 lg:text-xs"
        >
          JOIN NOW
        </Link>
      </div>
    </div>
  );
}

function Sns() {
  return (
    <div className="flex items-center justify-evenly py-4 lg:gap-x-4 lg:py-0">
      <div>
        <Link href={"#"} className="block">
          <Image
            src="/images/icon_x_white.png"
            width={24}
            height={25}
            alt="x"
          />
        </Link>
      </div>
      <div>
        <Link href={"#"} className="block">
          <Image
            src="/images/icon_instagram_white.png"
            width={24}
            height={24}
            alt="instagram"
          />
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isPc = useMediaQuery(mediaQuery.pc);

  useEffect(() => {
    if (isPc) {
      document.body.classList.remove("is-noScroll");
    } else {
      if (isOpen && !isPc) {
        document.body.classList.add("is-noScroll");
      }
    }
  }, [isPc, isOpen]);

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight;
    document.documentElement.style.setProperty(
      "--headerHeight",
      `${headerHeight}px`,
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="inset-bs-0 inset-s-0 fixed z-50 w-full bg-(--foreground-transparent50) py-2 lg:py-8"
    >
      <div className="inner flex items-center justify-between lg:mb-4">
        <h1
          onClick={() => {
            setIsOpen(false);
            document.querySelector("body")?.classList.remove("is-noScroll");
          }}
          className="text-background text-2xl font-bold tracking-tighter lg:text-5xl"
        >
          <Link href={"/"}>IGNITE MOVEMENT</Link>
        </h1>

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            document.querySelector("body")?.classList.toggle("is-noScroll");
          }}
          className="lg:hidden"
        >
          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-6 fill-white"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}
          {isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-6 fill-white"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </button>

        <div
          onClick={() => {
            setIsOpen(false);
            document.querySelector("body")?.classList.remove("is-noScroll");
          }}
          className={`${isOpen ? "is-open" : "is-close"} absolute top-full left-0 h-(--height-full-without-header-height) w-full overflow-y-auto bg-(--foreground-transparent80) py-4 transition-(--transition-property) duration-[0.4s] lg:hidden`}
        >
          <div className="mx-auto max-w-md">
            <Nav />
            <Contact />
            <Account />
            <Sns />
          </div>
        </div>

        <div className="hidden items-center gap-x-8 lg:flex">
          <Account />
          <Sns />
          <Contact />
        </div>
      </div>

      <div className="hidden lg:block">
        <Nav />
      </div>
    </header>
  );
}
