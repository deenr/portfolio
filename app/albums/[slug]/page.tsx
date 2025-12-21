import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhotos, getAlbums } from "../../lib/photos";
import ClientGallery from "../../components/client-gallery";
import { ScrollToTop } from "../../components/scroll-to-top";
import { Footer } from "../../components/footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const albums = await getAlbums();
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  const photos = await getPhotos(slug);

  if (photos.length === 0) {
    notFound();
  }

  return (
    <>
      {/* <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:shadow-md rounded-md text-sm"
        href="#main-content"
      >
        skip to main content
      </a> */}
      <main
        className="relative mx-auto flex max-w-4xl flex-col gap-8 sm:gap-12 font-mono min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]"
        id="main-content"
      >
        <header className="flex flex-col gap-1">
          <h1 className="font-medium text-xl sm:text-2xl tracking-tight">
            {slug}
          </h1>
          <p className="text-[var(--muted-foreground)] text-sm sm:text-base">
            {photos.length} photos
          </p>
        </header>

        <ClientGallery photos={photos} />

        <footer className="text-[var(--muted-foreground)] text-xs sm:text-sm font-mono">
          <div className="flex flex-col gap-2">
            <ScrollToTop />
          </div>
        </footer>

        <Footer />
      </main>
    </>
  );
}
