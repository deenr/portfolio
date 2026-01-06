"use client";

import Image from "next/image";
import { useState } from "react";

type Photo = {
  src: string;
  alt: string;
  date: string;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

export function Gallery({ photos }: { photos: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 aspect-[2/3] snap-center cursor-pointer group overflow-hidden rounded-sm"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{
                filter: photo.blurDataURL ? 'blur(20px)' : 'none',
                background: photo.blurDataURL ? `no-repeat center/cover url(${photo.blurDataURL})` : 'none'
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full h-[80vh]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <p className="text-white/80 font-mono mt-4 text-sm">
              {selectedPhoto.date}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
