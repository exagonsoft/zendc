"use client";

"use client";

import { Testimonial } from "@/types/testimonal";
import React, { useState } from "react";
import TestimonialCard from "../TestimonialCard";

const Carousel = ({ slides }: { slides: Array<Testimonial> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full relative overflow-hidden lg:overflow-visible flex flex-col lg:flex-row">
      <button className="absolute top-[45%] bg-[rgba(0, 0, 0, 0.5)] text-white border-none cursor-pointer p-2 px-[1.1rem] text-[20px] -left-16 hover:bg-slate-200 rounded-full transition-all" onClick={goToPrevSlide}>
        ❮
      </button>
      <button className="absolute top-[45%] bg-[rgba(0, 0, 0, 0.5)] text-white border-none cursor-pointer p-2 px-[1.1rem] text-[20px] -right-16 hover:bg-slate-200 rounded-full transition-all" onClick={goToNextSlide}>
        ❯
      </button>
      <div className="mx-auto grid sm:flex max-w-5xl grid-cols-1 grid-rows-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 w-full">
        {slides.map((slide, index) => (
          <TestimonialCard
            key={index}
            name={slide.name}
            picture={slide.picture}
            location={slide.location}
            testimonial={slide.testimonial}
            rate={slide.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;