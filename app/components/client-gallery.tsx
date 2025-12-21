"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./image-modal";
import type { Photo } from "../lib/photos";

export default function ClientGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);
  const initialIndexRef = useRef(-1);
  const [columnCount, setColumnCount] = useState(2);

  const handleOpen = (i: number) => {
    initialIndexRef.current = i;
    setIndex(i);
  };

  const handleClose = () => {
    setIndex(-1);
    initialIndexRef.current = -1;
  };

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumnCount(4);
      else if (window.innerWidth >= 640) setColumnCount(3);
      else setColumnCount(2);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Distribute photos into columns to maintain a better visual order
  const columns = Array.from({ length: columnCount }, (_, i) =>
    photos.filter((_, j) => j % columnCount === i)
  );

  return (
    <>
      <div className="flex gap-4 items-start">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 flex-1">
            {column.map((photo) => {
              const photoIndex = photos.indexOf(photo);
              return (
                <motion.div
                  key={photo.src}
                  layoutId={`photo-${photo.src}`}
                  className="relative overflow-hidden rounded-sm group cursor-pointer w-full"
                  onClick={() => handleOpen(photoIndex)}
                >
                  <div style={{ aspectRatio: `${photo.width} / ${photo.height}` }} className="relative w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt || ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <p className="text-white/90 text-xs font-mono">
                      {photo.date}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {index >= 0 && (
          <ImageModal
            photo={photos[index]}
            initialPhoto={photos[initialIndexRef.current]}
            onClose={handleClose}
            onNext={() => setIndex((index + 1) % photos.length)}
            onPrev={() => setIndex((index - 1 + photos.length) % photos.length)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
