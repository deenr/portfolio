"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Photo } from "../lib/photos";

type ImageModalProps = {
  photo: Photo;
  initialPhoto: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageModal({ photo, initialPhoto, onClose, onNext, onPrev }: ImageModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Navigation Buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-8 text-white/50 hover:text-white transition-colors z-50 hidden sm:flex cursor-pointer rounded-full"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-8 text-white/50 hover:text-white transition-colors z-50 hidden sm:flex cursor-pointer rounded-full"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div
        className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-12"
      >
        <motion.div 
          className="relative w-full h-full max-w-7xl max-h-[85vh] cursor-default"
        >
          <Image
            src={photo.src}
            alt={photo.alt || ""}
            fill
            className="object-contain unorient"
            quality={100}
            priority
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          key={photo.src}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex flex-col items-center pointer-events-none gap-2"
        >
          <div className="px-4 py-2 rounded-full flex gap-4 items-center text-white max-w-[90vw] pointer-events-auto">
            {photo.description && (<><p className="font-medium text-sm truncate">
              {photo.description}
            </p>
            <span className="w-1 h-1 bg-white/50 rounded-full" /></>)}
            <p className="font-medium text-sm truncate">
              {photo.location || "Unknown Location"}
            </p>
            <span className="w-1 h-1 bg-white/50 rounded-full" />
            <p className="font-mono text-xs whitespace-nowrap">
              {photo.date}
            </p>
          </div>
        </motion.div>

        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 p-6 text-white/50 hover:text-white transition-colors cursor-pointer z-50 rounded-full"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
