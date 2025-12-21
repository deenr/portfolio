import Link from "next/link";
import Image from "next/image";
import { Opteamal } from "./components/opteamal";
import { Arrow } from "./components/arrow";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:shadow-md rounded-md text-sm"
        href="#main-content"
      >
        skip to main content
      </a>
      <main
        className="relative mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16 font-mono min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]"
        id="main-content"
      >
        <header className="flex flex-row items-center gap-4">
          <div className="relative size-12 sm:size-14 flex-shrink-0">
            <Image
              src="/6Zbcm.jpg"
              alt="Dean Reymen"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-xl sm:text-2xl tracking-tight">
              dean reymen
            </h1>
            <p className="text-[var(--muted-foreground)] text-base">
              software engineer
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <div className="text-[var(--muted-foreground)] flex flex-col gap-4 text-base leading-relaxed">
            <p className="inline-flex items-center gap-1">
              currently working as a software engineer at{" "}
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
              className="group text-[var(--muted-foreground)] hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
            >
              <div className="inline-flex items-center gap-1 group-hover:underline underline-offset-[3px]">
                <div className="relative size-3.5 sm:size-4 overflow-hidden rounded-sm flex items-center justify-center text-[#C8EF00] flex-shrink-0">
                  <Opteamal className="size-3.5 sm:size-4" />
                </div>
                <span className="text-base">opteamal</span>
              </div>
              <span className="text-[var(--muted-foreground)] text-base">
                frontend developer
              </span>
            </a>
            <a
              href="https://verhaert.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-[var(--muted-foreground)] hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
            >
              <div className="inline-flex items-center gap-1 group-hover:underline underline-offset-[3px]">
                <div className="relative size-3.5 sm:size-4 overflow-hidden rounded-sm flex-shrink-0">
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
              <span className="text-[var(--muted-foreground)] text-base">
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
            <div className="text-[var(--muted-foreground)] py-1 text-base flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div className="relative size-3.5 sm:size-4 overflow-hidden rounded-sm flex-shrink-0">
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
              <span className="text-[var(--muted-foreground)] text-base text-right">
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
              className="group text-[var(--muted-foreground)] hover:text-foreground py-1 transition-colors duration-150 text-base flex items-center justify-between gap-2"
              href="/albums/fujifilm"
            >
              <span className="text-base group-hover:underline underline-offset-[3px]">
                fujifilm
              </span>
              <Arrow className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
