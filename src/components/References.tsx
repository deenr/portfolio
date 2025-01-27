import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import 'swiper/css';

interface Reference {
  author: string;
  role: string;
  text: string;
}

export function References({ className }: { className?: string }) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [referenceIndex, setReferenceIndex] = useState<number>(0);

  const references: Reference[] = [
    {
      author: 'Karel De Smet',
      role: 'Front-end Developer',
      text: "As Dean's mentor, I saw him quickly make an impact by learning fast, asking the right questions, and handling tasks with ease. He'd be a great addition to any team!"
    },
    {
      author: 'Vincent Van den Heede',
      role: 'Operations Manager',
      text: 'Dean is a motivated, diligent developer. In two years as his manager, I saw his professionalism, problem-solving, and eagerness to learn.'
    }
  ];

  return (
    <section className={`relative w-full flex flex-col bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px] ${className}`}>
      <h3 className="absolute z-10 top-7 left-7 text-gray-400 dark:text-gray-300 text-base font-regular">References</h3>
      <div className="absolute z-10 top-7 right-7 flex flex-row">
        {references.map((_, index) => (
          <button key={index} aria-label={`Go to reference ${index}`} type="button" className="group h-6 cursor-pointer px-1" onClick={() => swiper?.slideTo(index)}>
            {index === referenceIndex ? (
              <div className="w-2 h-2 rounded-full bg-primary-500 cursor-pointer"></div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 cursor-pointer opacity-20 group-hover:opacity-30"></div>
            )}
          </button>
        ))}
      </div>
      <div className="absolute w-full h-full pt-7 px-7 flex flex-row justify-between"></div>
      <Swiper className="w-full" onSlideChange={({ realIndex }) => setReferenceIndex(realIndex)} onSwiper={setSwiper}>
        {references.map((reference, index) => (
          <SwiperSlide key={index} className="!w-full h-fit pt-[66px] pb-7 px-7">
            <p className="text-gray-900 dark:text-white text-lg font-medium">“{reference.text}”</p>
            <blockquote className="mt-1 flex flex-col text-gray-500 dark:text-gray-300 text-sm">
              <p className="font-medium">
                — {reference.author}, <span className="font-normal">{reference.role}</span>
              </p>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
