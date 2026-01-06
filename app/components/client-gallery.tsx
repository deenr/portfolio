"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./image-modal";
import type { Photo } from "../lib/photos";

export default function ClientGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);
  const initialIndexRef = useRef(-1);
  const [columnCount, setColumnCount] = useState(2);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpen = (i: number) => {
    initialIndexRef.current = i;
    setIndex(i);
  };

  const handleClose = () => {
    setIndex(-1);
    initialIndexRef.current = -1;
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, photoIndex: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpen(photoIndex);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = Math.min(photoIndex + 1, photos.length - 1);
        setFocusedIndex(nextIndex);
        photoRefs.current[nextIndex]?.focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = Math.max(photoIndex - 1, 0);
        setFocusedIndex(prevIndex);
        photoRefs.current[prevIndex]?.focus();
      }
    },
    [photos.length]
  );

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
      <div className="flex gap-4 items-start" role="grid" aria-label="Photo gallery">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 flex-1" role="row">
            {column.map((photo) => {
              const photoIndex = photos.indexOf(photo);
              
              // Seeded random for deterministic random heights
              const getSeededRandom = (seed: string) => {
                let hash = 0;
                for (let i = 0; i < seed.length; i++) {
                  hash = ((hash << 5) - hash) + seed.charCodeAt(i);
                  hash |= 0;
                }
                const rand = (Math.abs(hash) % 1000) / 1000;
                return rand;
              };

              const randomValue = getSeededRandom(photo.src);
              let displayWidth = photo.width;
              let displayHeight = photo.height;
              
              if (photo.height > photo.width) {
                // Vertical: between height and 2/3 height
                displayHeight = photo.height * (1 - (randomValue * 0.2));
              } else {
                // Horizontal: between height and 4/3 height
                displayHeight = photo.height * (1 + (randomValue * .5));
              }

              return (
                <motion.div
                  key={photo.src}
                  ref={(el) => {
                    photoRefs.current[photoIndex] = el;
                  }}
                  layoutId={`photo-${photo.src}`}
                  className="relative overflow-hidden rounded-sm group cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                  onClick={() => handleOpen(photoIndex)}
                  onKeyDown={(e) => handleKeyDown(e, photoIndex)}
                  tabIndex={photoIndex === 0 ? 0 : -1}
                  role="gridcell"
                  aria-label={`Photo ${photoIndex + 1} of ${photos.length}${photo.alt ? `: ${photo.alt}` : ""}`}
                  onFocus={() => setFocusedIndex(photoIndex)}
                >
                  <div style={{ aspectRatio: `${displayWidth} / ${displayHeight}` }} className="relative w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt || ""}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"

                      placeholder={photo.blurDataURL ? "blur" : "empty"}
                      blurDataURL={photo.blurDataURL}

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
