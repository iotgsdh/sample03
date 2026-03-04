import Link from "next/link";
import { items } from "@/app/constants";
import Image from "next/image";

function Nav() {
  const listItems = items.map((item, i) => (
    <li key={i}>
      <Link
        href={item.path}
        className="block flex flex-col items-center py-2 font-bold"
      >
        {item.en}
        <span className="block text-xs">{item.ja}</span>
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul className="flex flex-wrap justify-between gap-x-4">{listItems}</ul>
    </nav>
  );
}

function Contact() {
  return (
    <div className="flex justify-center py-4">
      <Link
        href={"#"}
        className="block rounded-md border px-4 py-2 text-lg font-bold"
      >
        CONTACT
        <span className="block text-center text-sm">お問い合わせ</span>
      </Link>
    </div>
  );
}

function Account() {
  return (
    <div className="flex items-center justify-evenly py-4">
      <div>
        <Link
          href={"#"}
          className="flex flex-col items-center text-sm font-bold"
        >
          <div className="fill-foreground w-8">
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
          className="text-background block rounded-md bg-gray-400 px-4 py-2 text-lg font-bold"
        >
          JOIN NOW
        </Link>
      </div>
    </div>
  );
}

function Sns() {
  return (
    <div className="flex items-center justify-evenly py-4">
      <div>
        <Link href={"#"} className="block">
          <Image
            src="/images/icon_x_black.png"
            width={24}
            height={25}
            alt="x"
          />
        </Link>
      </div>
      <div>
        <Link href={"#"} className="block">
          <Image
            src="/images/icon_instagram_black.png"
            width={24}
            height={24}
            alt="instagram"
          />
        </Link>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg03 bg04 relative py-8">
      <div className="inner relative z-10">
        <div className="mb-4 text-2xl font-bold">
          <Link href={"/"}>IGNITE MOVEMENT</Link>
        </div>
        <Nav />
        <Contact />
        <Account />
        <Sns />
        <div className="flex justify-center">
          <p className="my-8 text-sm">
            IGNITE
            MOVEMENTは未来のクリエイターを応援する架空のカルチャープロジェクトです。
          </p>
        </div>
        <p className="text-center text-xs">
          &copy; 2026 IGNITE MOVEMENT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
