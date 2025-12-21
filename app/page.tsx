import Link from "next/link";
import Image from "next/image";
import { Opteamal } from "./components/opteamal";
import { Arrow } from "./components/arrow";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      {/* <a
        className="absolute -top-full left-0 focus:top-4 focus:left-4 z-50 bg-background px-4 py-2 shadow-md rounded-md text-sm transition-all"
        href="#main-content"
      >
        skip to main content
      </a> */}
      <main
        className="relative mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16 font-mono min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]"
        id="main-content"
      >
        <header className="flex flex-row items-center gap-3">
          <div className="relative size-10 sm:size-12 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/6Zbcm.jpg"
              alt="Dean Reymen"
              fill
              className="object-cover scale-125"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-base tracking-tight">
              dean reymen
            </h1>
            <p className="text-[var(--muted-foreground)] text-sm">
              software engineer
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <div className="text-foreground flex flex-col gap-4 text-base leading-relaxed">
            <p className="inline-flex items-center gap-1.5 flex-wrap">
              currently working as a software engineer at
              <a
                className="inline-flex items-center gap-1 hover:text-foreground hover:underline underline-offset-[3px] transition-colors"
                href="https://teamworks.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="teamworks logo"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  className="rounded-sm"
                  style={{ color: "transparent" }}
                  src="https://www.google.com/s2/favicons?domain=teamworks.com&sz=32"
                />
                teamworks
              </a>
            </p>
          </div>
        </section>

        <section
          aria-labelledby="experience-heading"
          className="flex flex-col gap-2"
        >
          <p
            className="text-[var(--muted-foreground)] text-sm font-mono"
            id="experience-heading"
          >
            where i&apos;ve worked
          </p>
          <div className="flex flex-col">
            <a
              href="https://opteamalsports.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-foreground hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
            >
              <div className="inline-flex items-center gap-1 group-hover:underline underline-offset-[3px]">
                <div className="relative size-4 sm:size-5 p-0.5 overflow-hidden rounded-sm flex items-center justify-start text-black dark:text-[#C8EF00] flex-shrink-0">
                  <Opteamal className="size-3.5 sm:size-4" />
                </div>
                <span className="text-base">opteamal</span>
              </div>
              <span className="text-foreground text-base">
                frontend developer
              </span>
            </a>
            <a
              href="https://verhaert.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-foreground hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
            >
              <div className="inline-flex items-center gap-1 group-hover:underline underline-offset-[3px]">
                <div className="relative size-4 sm:size-5 p-0.5 overflow-hidden rounded-sm flex-shrink-0">
                  <img
                    alt="Verhaert logo"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    className="rounded-sm"
                    style={{ color: "transparent" }}
                    src="https://www.google.com/s2/favicons?domain=verhaert.com&sz=32"
                  />
                </div>
                <span className="text-base">verhaert</span>
              </div>
              <span className="text-foreground text-base">
                frontend developer
              </span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="education-heading"
          className="flex flex-col gap-2"
        >
          <p
            className="text-[var(--muted-foreground)] text-sm font-mono"
            id="education-heading"
          >
            education
          </p>
          <div className="flex flex-col">
            <div className="text-foreground py-1 text-base flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div className="relative size-4 sm:size-5 p-0.5 overflow-hidden rounded-sm flex-shrink-0">
                  <img
                    alt="Hasselt University logo"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    className="rounded-sm"
                    style={{ color: "transparent" }}
                    src="https://www.google.com/s2/favicons?domain=uhasselt.be&sz=32"
                  />
                </div>
                <span className="text-base">hasselt university</span>
              </div>
              <span className="text-foreground text-base text-right">
                masters in electronics and ict
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <p className="text-[var(--muted-foreground)] text-sm font-mono">
            pictures
          </p>
          <div className="flex flex-col">
            <Link
              className="group text-foreground hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
              href="/albums/fujifilm"
            >
              <span className="text-base group-hover:underline underline-offset-[3px]">
                fujifilm
              </span>
              {/* <Arrow className="transition-transform group-hover:translate-x-0.5" /> */}
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
