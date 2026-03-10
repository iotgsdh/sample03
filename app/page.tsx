import { client } from "@/libs/client";
import Link from "next/link";
import News from "./component/news";
import Events from "./component/events";
import Image from "next/image";

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: 3 },
  });

  return (
    <div>
      <main>
        {/* hero */}
        <div className="bg01 bg02 relative flex h-dvh flex-col justify-center bg-(--foreground-transparent50) bg-[url(../public/images/ilja-tulit-ucAMMD36Si0-unsplash.jpg)] bg-cover bg-position-[67%] bg-no-repeat bg-blend-overlay landscape:h-[150dvh] lg:landscape:h-dvh">
          <div className="relative flex flex-col items-center px-4">
            <p className="text-background text-shadow-foreground flex flex-col gap-y-2 font-bold text-shadow-2xs">
              <span className="text-6xl md:text-8xl lg:text-9xl">
                MOVE
                <br />
                THE
                <br className="md:hidden" />
                <span className="hidden md:inline-block">&nbsp;</span>
                WORLD.
              </span>
              <span className="text-2xl md:text-center md:text-4xl lg:text-6xl">
                Your stage begins here.
              </span>
              <span className="md:text-center md:text-2xl lg:text-4xl">
                世界を動かすのは、君だ。
              </span>
            </p>
            <div className="absolute top-[calc(100%+24px)] lg:top-[calc(100%+48px)]">
              <Link
                href={"#"}
                className="inline-block rounded-md bg-yellow-400 px-4 py-2 text-lg font-bold text-gray-400 md:text-2xl lg:px-8 lg:py-4 lg:text-4xl"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>

        {/* news */}
        <section className="py-4">
          <div className="inner md:flex md:items-center md:justify-center md:gap-x-8">
            <h2 className="mb-2 text-lg font-bold md:mb-0">NEWS</h2>
            <News data={data} />
          </div>
        </section>

        {/* events */}
        <section className="bg03 bg04 bg-foreground relative flex min-h-screen flex-col justify-center py-16 md:py-32">
          <div className="inner relative z-10">
            <h2 className="text-background mb-2 text-4xl font-bold lg:text-6xl">
              EVENTS
            </h2>
            <Events />
          </div>
        </section>

        {/* about */}
        <section className="bg03 bg04 relative flex min-h-screen flex-col justify-center py-16 md:py-32">
          <div className="inner relative z-10">
            <div className="gap-x-8 md:flex md:items-center md:justify-between lg:justify-center">
              <p className="mb-4 md:order-2 md:w-[45%]">
                <span className="text-lg font-bold">MOVE BEYOND LIMITS.</span>
                <br />
                IGNITE
                MOVEMENTは、パフォーマンスと創造性を通じて新しいカルチャーを創り出すコミュニティです。
                <br />
                ジャンルや国境を越え、挑戦するすべての人にステージを提供します。
              </p>
              <div className="mb-4 md:order-1 md:w-[45%] lg:w-[30%]">
                <Image
                  src={"/images/anna-frizen-QA1ZFTvNnuQ-unsplash.jpg"}
                  width={400}
                  height={530}
                  alt=""
                  className="w-full object-cover md:aspect-400/530"
                />
              </div>
            </div>
            <div className="md:flex md:justify-center">
              <p className="mb-8 text-2xl font-bold md:text-4xl md:leading-14 lg:text-5xl lg:leading-18">
                さあ、一歩を踏み出せ。
                <br />
                ここから始まる。
                <br />
                未来は、動き出している。
              </p>
            </div>
            <h2 className="flex justify-end">
              <Link
                href={"#"}
                className="flex items-center text-lg font-bold md:text-2xl lg:text-4xl"
              >
                ABOUT
                <div className="w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                  </svg>
                </div>
              </Link>
            </h2>
          </div>
        </section>

        {/* list */}
        <div className="bg03 bg04 relative flex min-h-screen flex-col justify-center bg-(--foreground-transparent50) bg-[url(../public/images/samantha-gades-fIHozNWfcvs-unsplash.jpg)] bg-cover bg-position-[67%] bg-no-repeat py-16 bg-blend-overlay md:py-32">
          <div className="inner relative z-10 lg:mx-auto lg:w-4xl">
            <ul className="w-[80%] md:w-[60%]">
              <li>
                <Link
                  href={"#"}
                  className="bg-foreground flex items-center justify-between gap-x-4 p-2 md:p-4"
                >
                  <div className="text-background font-bold">
                    <span className="block text-lg md:text-2xl">
                      WHAT&apos;S NEW
                    </span>
                    <span className="block">最新情報</span>
                  </div>
                  <div className="fill-background w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="bg-background flex items-center justify-between gap-x-4 p-2 md:p-4"
                >
                  <div className="font-bold">
                    <span className="block text-lg md:text-2xl">PROGRAM</span>
                    <span className="block">育成プログラム</span>
                  </div>
                  <div className="w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="bg-foreground flex items-center justify-between gap-x-4 p-2 md:p-4"
                >
                  <div className="text-background font-bold">
                    <span className="block text-lg md:text-2xl">
                      EVENT SCHEDULE
                    </span>
                    <span className="block">イベント一覧</span>
                  </div>
                  <div className="fill-background w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="bg-background flex items-center justify-between gap-x-4 p-2 md:p-4"
                >
                  <div className="font-bold">
                    <span className="block text-lg md:text-2xl">RANKING</span>
                    <span className="block">参加者ランキング</span>
                  </div>
                  <div className="w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* partners */}
        <section className="bg03 bg04 bg-foreground relative flex min-h-screen flex-col justify-center py-16 md:py-32">
          <div className="inner relative z-10 mx-auto lg:w-2xl">
            <div className="mb-8">
              <h2 className="text-background mb-2 text-center text-lg font-bold">
                OFFICIAL PARTNERS
              </h2>
              <div className="flex flex-wrap justify-between gap-y-4">
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/nova-energy.png"}
                      width={300}
                      height={150}
                      alt="NOVA ENERGY"
                      className="w-full"
                    />
                  </a>
                </div>
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/blue-core.png"}
                      width={300}
                      height={150}
                      alt="BLUE CORE"
                      className="w-full"
                    />
                  </a>
                </div>
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/vision-holdings.png"}
                      width={300}
                      height={150}
                      alt="VISION HOLDINGS"
                      className="w-full"
                    />
                  </a>
                </div>
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/ark-systems.png"}
                      width={300}
                      height={150}
                      alt="ARK SYSTEMS"
                      className="w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-background mb-2 text-center text-lg font-bold">
                OFFICIAL WEAR PARTNER
              </h2>
              <div className="flex flex-wrap justify-center">
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/aeroflow.png"}
                      width={300}
                      height={150}
                      alt="AEROFLOW"
                      className="w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-background mb-2 text-center text-lg font-bold">
                MEDIA PARTNERS
              </h2>
              <div className="flex flex-wrap justify-between gap-y-4">
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/urban-times.png"}
                      width={300}
                      height={150}
                      alt="URBAN TIMES"
                      className="w-full"
                    />
                  </a>
                </div>
                <div className="w-[calc(50%-8px)]">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/images/next-mag.png"}
                      width={300}
                      height={150}
                      alt="NEXT MAG"
                      className="w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
