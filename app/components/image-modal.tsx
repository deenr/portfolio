"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from "framer-motion";
import type { Photo } from "../lib/photos";

type ImageModalProps = {
  photo: Photo;
  initialPhoto: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageModal({ photo, initialPhoto, onClose, onNext, onPrev }: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for zoom and pan
  const scale = useMotionValue(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Background opacity based on swipe down
  const opacity = useTransform(y, [0, 300], [1, 0.4]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setShowSpinner(false);
    
    // Reset motion values on photo change
    scale.set(1);
    x.set(0);
    y.set(0);
    setIsZoomed(false);

    // Add a small delay before showing the spinner to prevent flickering
    // Only show if it's still loading after 400ms
    const timer = setTimeout(() => {
      setIsLoading(prev => {
        if (prev) setShowSpinner(true);
        return prev;
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [photo.src, scale, x, y]);

  useEffect(() => {
    if (!isLoading) {
      setShowSpinner(false);
    }
  }, [isLoading]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        if (scale.get() === 1) onNext();
      }
      if (e.key === "ArrowLeft") {
        if (scale.get() === 1) onPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev, scale]);

  const handleDragEnd = (e: any, info: any) => {
    const currentScale = scale.get();
    
    if (currentScale === 1) {
      // Swipe functionality removed as requested
      // controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
    } else {
      // When zoomed in, we use standard drag behavior with constraints (handled by framer motion)
    }
  };

  const touchStartDist = useRef<number | null>(null);
  const initialScale = useRef(1);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      touchStartDist.current = dist;
      initialScale.current = scale.get();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDist.current !== null) {
      const dist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const newScale = Math.max(1, Math.min(initialScale.current * (dist / touchStartDist.current), 4));
      scale.set(newScale);
      setIsZoomed(newScale > 1.05);
    }
  };

  const handleTouchEnd = () => {
    touchStartDist.current = null;
    if (scale.get() < 1.05) {
      scale.set(1);
      setIsZoomed(false);
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      style={{ opacity }}
      onClick={onClose}
    >
      {/* Loading Indicator */}
      <AnimatePresence>
        {showSpinner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none"
          >
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <AnimatePresence>
        {scale.get() === 1 && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-0 top-0 bottom-0 w-1/4 sm:w-auto sm:px-8 text-white/50 hover:text-white transition-colors z-50 flex items-center justify-start sm:pl-8 cursor-pointer"
              aria-label="Previous image"
            >
              <div className="p-4 rounded-full sm:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </div>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-0 top-0 bottom-0 w-1/4 sm:w-auto sm:px-8 text-white/50 hover:text-white transition-colors z-50 flex items-center justify-end sm:pr-8 cursor-pointer"
              aria-label="Next image"
            >
              <div className="p-4 rounded-full sm:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center p-0 sm:p-12 overflow-hidden"
      >
        <motion.div 
          animate={controls}
          style={{ scale, x, y, touchAction: "none" }}
          className="relative w-full h-full max-w-7xl max-h-[90vh] cursor-default flex items-center justify-center"
          drag={isZoomed}
          dragConstraints={isZoomed ? undefined : { left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={isZoomed ? 0 : 0.5}
          onDragEnd={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Blur placeholder background - visible until image loads */}
            {photo.blurDataURL && isLoading && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${photo.blurDataURL})`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)', // Prevent blur edges from showing
                }}
              />
            )}
            {/* Full quality image */}
            <Image
              src={photo.src}
              alt={photo.alt || ""}
              fill
              className={`object-contain ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsLoading(false)}
              draggable={false}
              priority
            />
          </div>
        </motion.div>
        
        {/* Metadata - Hidden when zoomed */}
        <AnimatePresence>
          {scale.get() === 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={photo.src}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex flex-col items-center pointer-events-none gap-2 z-50"
            >
              <div className="px-4 py-2 rounded-full flex gap-4 items-center text-white max-w-[90vw] pointer-events-auto bg-black/20 backdrop-blur-sm shadow-lg border border-white/5">
                {photo.description && (
                  <>
                    <p className="font-medium text-sm truncate">
                      {photo.description}
                    </p>
                    <span className="w-1 h-1 bg-white/50 rounded-full flex-shrink-0" />
                  </>
                )}
                <p className="font-medium text-sm truncate">
                  {photo.location || "Unknown Location"}
                </p>
                <span className="w-1 h-1 bg-white/50 rounded-full flex-shrink-0" />
                <p className="font-mono text-xs whitespace-nowrap">
                  {photo.date}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 p-4 text-white/50 hover:text-white transition-colors cursor-pointer z-[60] rounded-full sm:bg-transparent"
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
