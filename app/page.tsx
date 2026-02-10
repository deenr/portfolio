import Link from "next/link";
import Image from "next/image";
import { Opteamal } from "./components/opteamal";
import { Teamworks } from "./components/teamworks";
import { Verhaert } from "./components/verhaert";
import { UHasselt } from "./components/uhasselt";
import { BrandLink } from "./components/brand-link";
import { BrandDescriptionLink } from "./components/brand-description-link";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <main
        className="relative mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16 font-mono min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]"
        id="main-content"
      >
        <header className="flex flex-row items-center gap-3">
          <div className="relative size-10 sm:size-12 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/6Zbcm.webp"
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
            <p className="text-[var(--muted-foreground)] text-base">
              software engineer
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <div className="text-foreground flex flex-col gap-4 text-base leading-relaxed">
            <p>
              currently working as a software engineer at{" "}
              <BrandLink 
                href="https://teamworks.com"
                icon={<Teamworks className="size-3.5 sm:size-4" />}
                label="teamworks"
              />
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
            <BrandDescriptionLink
              href="https://opteamalsports.com"
              icon={<Opteamal className="size-3.5 sm:size-4" />}
              label="opteamal"
              iconColor="text-primary"
              description="frontend developer"
            />
            <BrandDescriptionLink
              href="https://verhaert.digital"
              icon={<Verhaert className="size-3.5 sm:size-4" />}
              label="verhaert"
              description="frontend consultant"
            />
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
            <BrandDescriptionLink
              href="https://www.uhasselt.be/en"
              icon={<UHasselt className="size-3.5 sm:size-4" />}
              label="uhasselt"
              description="master in ict engineering"
            />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <p className="text-[var(--muted-foreground)] text-sm font-mono">
            projects
          </p>
          <div className="flex flex-col">
            <BrandDescriptionLink
              href="https://table.deanreymen.be"
              label="table"
              description="february 2026"
            />
            <BrandDescriptionLink
              href="https://avatar.deanreymen.be"
              label="avatar"
              description="november 2025"
            />
            <BrandDescriptionLink
              href="https://r2r.deanreymen.be/"
              label="rise2role"
              description="february 2025"
            />
            <BrandDescriptionLink
              href="https://sphience.deanreymen.be/"
              label="sphience"
              description="august 2023"
            />
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
