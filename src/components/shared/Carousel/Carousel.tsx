"use client";

import { Testimonial } from "@/types/testimonal";
import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard";
import './carouselStyles.css';

const Carousel = ({ slides }: { slides: Array<Testimonial> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [renderSlides, setRenderSlides] = useState(Array<Testimonial>);

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

  useEffect(() => {
    const _usableTestimonials = slides.slice(currentIndex, currentIndex + 3);
  }, [])

  useEffect(() => {
    let counter = 0;
    setTimeout(() => {
        goToNextSlide();
    }, 10000);
    const _usableTestimonials = slides.slice(currentIndex, currentIndex + 3);
    while (_usableTestimonials.length < 3) {
        _usableTestimonials.push(slides[counter]);
        counter ++;
    }
    setRenderSlides(_usableTestimonials);
  }, [currentIndex]);

  return (
    <div className="w-full relative overflow-hidden lg:overflow-visible flex flex-col gap-4">
      <div className="w-full lg:flex overflow-visible gap-4 grid_containers">
        {renderSlides.map((slide, index) => (
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
      <div className="w-full flex justify-center gap-8 items-center">
        <button
          className="relative order-1 top-[45%] bg-[rgba(0, 0, 0, 0.5)] text-gray-600 border-none cursor-pointer p-2 px-[1.1rem] text-[20px] -left-16 hover:bg-slate-200 rounded-full transition-all"
          onClick={goToPrevSlide}
        >
          ❮
        </button>
        <button
          className="relative order-3 top-[45%] bg-[rgba(0, 0, 0, 0.5)] text-gray-600 border-none cursor-pointer p-2 px-[1.1rem] text-[20px] -right-16 hover:bg-slate-200 rounded-full transition-all"
          onClick={goToNextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
