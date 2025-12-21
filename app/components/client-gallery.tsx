"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./image-modal";
import type { Photo } from "../lib/photos";

export default function ClientGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);
  const initialIndexRef = useRef(-1);

  const handleOpen = (i: number) => {
    initialIndexRef.current = i;
    setIndex(i);
  };

  const handleClose = () => {
    setIndex(-1);
    initialIndexRef.current = -1;
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
        {photos.map((photo, i) => {
          const isHorizontal = photo.width > photo.height;
          return (
            <motion.div
              key={i}
              layoutId={`photo-${photo.src}`}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                isHorizontal ? "col-span-2" : "col-span-1 row-span-2"
              }`}
              onClick={() => handleOpen(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt || ""}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                quality={80}
                sizes={
                  isHorizontal
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white/90 text-xs font-mono">
                  {photo.date}
                </p>
              </div>
            </motion.div>
          );
        })}
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
